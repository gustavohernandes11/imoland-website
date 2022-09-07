import React from "react";
import type { NextPage } from "next";
import { Section } from "components/Section";
import { Heading } from "components/Heading";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { SearchBox } from "components/SearchBox";
import { ImmobileModal } from "components/ImmobileModal";
import { useState } from "react";
import { useGlobalContext } from "../../src/hooks/useGlobalContext";

import { hostname } from "../../src/config";
import apartamento from "../../src/assets/imgs/apartamento.webp";

import { Button, Grid, Pagination, CircularProgress } from "@mui/material";

const Catalogo: NextPage = ({ data = [], meta = {} }: any) => {
    const [immobilePosts, setImmobilePosts] = useState(data);
    const [metaData, setmetaData] = useState(meta);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [loading, setLoading] = useState(false);
    const [state] = useGlobalContext();

    const reloadWithFilters = async () => {
        setLoading(() => true);
        if (
            state.business_type_filter ||
            state.immobile_type_filter ||
            state.county_filter ||
            state.distric_filter
        ) {
            try {
                const url = `${hostname}/api/imoveis?populate[10]=deep${
                    state.business_type_filter &&
                    `&filters[Immobile_post][Business_type]=${state.business_type_filter}&`
                }${
                    state.immobile_type_filter &&
                    `&filters[Immobile_post][Immobile_type]=${state.immobile_type_filter}&`
                }${
                    state.county_filter &&
                    `&filters[Immobile_post][Concelho]=${state.county_filter}&`
                }${
                    state.distric_filter &&
                    `&filters[Immobile_post][District]=${state.distric_filter}&`
                }`;

                const res = await fetch(url);
                const { data, meta } = await res.json();

                if (!data) {
                    return {
                        data: [],
                    };
                } else {
                    setmetaData(() => meta);
                    setImmobilePosts(() => data);
                    setLoading(() => false);
                }
            } catch (e) {
                setLoading(() => false);
            }
        } else {
            try {
                const res = await fetch(
                    `${hostname}/api/imoveis?pagination[page]=1&pagination[pageSize]=25&&populate=deep`
                );
                const { data, meta } = await res.json();

                setmetaData(() => meta);
                setImmobilePosts(() => data);
                setLoading(() => false);
            } catch (e) {
                console.log("deu erro uai");
            }
        }
    };

    const loadPage = async (page: any) => {
        setCurrentPage(page);
        try {
            const res = await fetch(
                `${hostname}/api/imoveis?pagination[page]=${page}&pagination[pageSize]=25&&populate=deep`
            );
            const { data, meta } = await res.json();

            if (!data) {
                return {
                    data: [],
                };
            }
            setmetaData(meta);
            setImmobilePosts(data);
        } catch (e) {
            return {
                props: { data: [] },
            };
        }
    };
    return (
        <>
            <Header />
            <Section>
                <Grid container mb={2} xs={12} justifyContent="space-between">
                    <Heading>Catálogo de imóveis</Heading>
                </Grid>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <SearchBox
                            businessType={[
                                "Venda",
                                "Arrendamento",
                                "Transpasse",
                            ]}
                            immobileType={[
                                "Apartamento",
                                "Casa",
                                "Comercial",
                                "Terreno",
                                "Áreas",
                            ]}
                            // concelho={loadConcelhos()}
                            // distrito={loadDistricts()}
                        />
                        <Grid container xs={12} mb={2}>
                            <Button
                                variant="outlined"
                                onClick={reloadWithFilters}
                            >
                                Filtrar
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} spacing={2}>
                        {loading ? (
                            <Grid
                                container
                                xs={12}
                                alignItems="center"
                                justifyContent="center"
                                mt={6}
                                mb={6}
                            >
                                <CircularProgress />
                            </Grid>
                        ) : (
                            immobilePosts &&
                            immobilePosts.map((e: any) => {
                                return (
                                    <ImmobileModal
                                        key={e.id}
                                        row={true}
                                        src={apartamento}
                                        alt={"Imagem da casa"}
                                        name={
                                            !!e.attributes.Immobile_post.Name &&
                                            e.attributes.Immobile_post.Name
                                        }
                                        slug={
                                            !!e.attributes.slug &&
                                            e.attributes.slug
                                        }
                                        price={
                                            !!e.attributes.Immobile_post
                                                .Price &&
                                            e.attributes.Immobile_post.Price
                                        }
                                        n_bathrooms={
                                            !!e.attributes.Immobile_post
                                                .Informations.N_Bathrooms &&
                                            e.attributes.Immobile_post
                                                .Informations.N_Bathrooms
                                        }
                                        n_bedrooms={
                                            !!e.attributes.Immobile_post
                                                .Informations.N_Bedrooms &&
                                            e.attributes.Immobile_post
                                                .Informations.N_Bedrooms
                                        }
                                        n_garbage={
                                            !!e.attributes.Immobile_post
                                                .Informations.N_Garage &&
                                            e.attributes.Immobile_post
                                                .Informations.N_Garage
                                        }
                                        squareMeters={
                                            !!e.attributes.Immobile_post
                                                .Informations.Area &&
                                            e.attributes.Immobile_post
                                                .Informations.Area
                                        }
                                        location={
                                            !!e.attributes.Immobile_post
                                                .Localization &&
                                            e.attributes.Immobile_post
                                                .Localization
                                        }
                                        category={
                                            !!e.attributes.Immobile_post
                                                .Immobile_type &&
                                            e.attributes.Immobile_post
                                                .Immobile_type
                                        }
                                    />
                                );
                            })
                        )}

                        <Grid
                            container
                            xs={12}
                            mt={4}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Pagination
                                    count={metaData.pagination.page}
                                    page={currentPage}
                                    onChange={(p) => loadPage(p)}
                                    color="primary"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>

            <Footer />
        </>
    );
};
export default Catalogo;
export async function getStaticProps() {
    try {
        const res = await fetch(
            `${hostname}/api/imoveis?pagination[page]=1&pagination[pageSize]=25&&populate=deep`
        );
        const { data, meta } = await res.json();

        if (!data) {
            return {
                notFound: true,
            };
        }
        return {
            props: { data, meta },
        };
    } catch (e) {
        return {
            props: { data: null },
            notFound: true,
        };
    }
}
