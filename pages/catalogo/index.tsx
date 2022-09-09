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

import {
    businessTypeValues,
    immobileTypeValues,
    countyValues,
    districtValues,
} from "../../src/utils/search-values";
import {
    Button,
    Container,
    Grid,
    Pagination,
    CircularProgress,
    Typography,
    Stack,
} from "@mui/material";

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
            } catch {
                return;
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
                <Container disableGutters={true}>
                    <Grid
                        container
                        mb={2}
                        xs={12}
                        justifyContent="space-between"
                    >
                        <Heading>Catálogo de imóveis</Heading>
                    </Grid>
                    <Grid item>
                        <SearchBox
                            businessType={businessTypeValues}
                            immobileType={immobileTypeValues}
                            county={countyValues}
                            district={districtValues}
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
                    <Grid item spacing={2}>
                        {loading ? (
                            <Grid
                                container
                                xs={12}
                                alignItems="center"
                                justifyContent="center"
                                mt={12}
                                mb={12}
                            >
                                <CircularProgress />
                            </Grid>
                        ) : immobilePosts.length > 0 ? (
                            immobilePosts.map((e: any) => {
                                return (
                                    <ImmobileModal
                                        key={e.id}
                                        row={true}
                                        src={
                                            e?.attributes?.Gallery[0]?.Cape
                                                ?.data[0]?.attributes?.url
                                        }
                                        alt={"Imagem da casa"}
                                        name={
                                            
                                            e?.attributes?.Immobile_post?.Name
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
                        ) : (
                            <Grid
                                container
                                xs={12}
                                alignItems="center"
                                justifyContent="center"
                                mt={12}
                                mb={12}
                            >
                                <p>Nenhum resultado.</p>
                            </Grid>
                        )}
                    </Grid>
                    <Grid
                        container
                        xs={12}
                        mt={4}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Pagination
                            count={metaData.pagination.page}
                            page={currentPage}
                            onChange={(p) => loadPage(p)}
                            color="primary"
                        />
                    </Grid>
                </Container>
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
