import React from "react";
import { useEffect, useState } from "react";

import { hostname } from "../../src/config";
import type { NextPage } from "next";
import { Section } from "components/Section";
import { Heading } from "components/Heading";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { BackgroundCape } from "components/BackgroundCape";

import { DirectionsCar, KingBed, Bathtub } from "@styled-icons/material";
import { ArrowsExpand } from "@styled-icons/heroicons-outline";
import Carousel from "react-material-ui-carousel";

import Image from "next/image";

import casaIsoladaNoCampo from "../../src/assets/imgs/casa-isolada-no-campo.webp";
import apartamento from "../../src/assets/imgs/apartamento.webp";
import fazenda from "../../src/assets/imgs/fazenda.jpg";
import sala from "../../src/assets/imgs/sala.webp";

import { Grid, Typography, Stack, Chip } from "@mui/material";

const Catalogo: NextPage = ({ data = {} }: any) => {
    const [immobileData] = useState(data);

    useEffect(() => {
        const data = loadImmobilesWithFilters();
        console.log(data);
    }, [immobileData]);
    const images = [casaIsoladaNoCampo, apartamento, fazenda, sala];
    return (
        <>
            <Header />
            {immobileData.attributes.Gallery[0].Cape.data[0].attributes.url && (
                <BackgroundCape
                    height={1000 / 2}
                    width={1500 / 2}
                    backgroundUrl={`${immobileData.attributes.Gallery[0].Cape.data[0].attributes.url}`}
                />
            )}

            <Section className="immobile-details-section">
                <Heading>{immobileData.attributes.Immobile_post.Name}</Heading>
                <p className="immobile-price--details-page">
                    {immobileData.attributes.Immobile_post.Price}
                </p>
                <Heading as="h2">Visão geral</Heading>
                <Stack mt={3} direction="row" gap={3}>
                    <span className="information-icon">
                        <Bathtub width={20} height={20} />
                        <p>
                            Banheiros:{" "}
                            {
                                immobileData.attributes.Immobile_post
                                    .Informations.N_Bathrooms
                            }
                        </p>
                    </span>
                    <span className="information-icon">
                        <KingBed width={20} height={20} />
                        <p>
                            Quartos:{" "}
                            {
                                immobileData.attributes.Immobile_post
                                    .Informations.N_Bedrooms
                            }
                        </p>
                    </span>
                    <span className="information-icon">
                        <DirectionsCar width={20} height={20} />
                        <p>
                            Garagens:{" "}
                            {
                                immobileData.attributes.Immobile_post
                                    .Informations.N_Garage
                            }
                        </p>
                    </span>
                    <span className="information-icon">
                        <ArrowsExpand width={20} height={20} />
                        <p>
                            Área:{" "}
                            {
                                immobileData.attributes.Immobile_post
                                    .Informations.Area
                            }
                        </p>
                    </span>
                </Stack>

                <Grid container xs={12} gap={6}>
                    <Grid item xs={12} md={8}>
                        <Heading as="h2">Informações</Heading>
                        <Typography mb={1}>
                            Tipo de negócio:{" "}
                            <Chip
                                label={
                                    immobileData.attributes.Immobile_post
                                        .Business_type
                                }
                            />
                        </Typography>
                        <Typography mb={1}>
                            Classificação:{" "}
                            <Chip
                                label={
                                    immobileData.attributes.Immobile_post
                                        .Immobile_type
                                }
                            />
                        </Typography>
                        <Typography>
                            {immobileData.attributes.Immobile_post.Description}
                        </Typography>
                        <Heading as="h2">Galeria</Heading>
                        <Grid xs={12} mt={3} mb={3}>
                            <Carousel
                            height={`50vh`}
                                navButtonsAlwaysVisible={true}
                                stopAutoPlayOnHover={true}
                                duration={200}
                            >
                                {immobileData.attributes.Gallery[0].Image.data.map(
                                    (
                                        e: any,
                                        i: React.Key | null | undefined
                                    ) => (
                                        <Grid
                                            className="carousel"
                                            key={i}
                                            xs={12}
                                            container
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Image
                                                src={`${e.attributes.url}`}
                                                alt="Imagem da galeria"
                                                height={e.attributes.height}
                                                width={e.attributes.width}
                                                layout="intrinsic"
                                            />
                                        </Grid>
                                    )
                                )}
                            </Carousel>
                        </Grid>
                        <Heading as="h2">Detalhamento</Heading>
                        {immobileData.attributes.Immobile_post.Details}
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Heading as="h3">Localização</Heading>
                        <Typography>
                            {immobileData.attributes.Immobile_post.Localization}
                        </Typography>
                        <Heading as="h3">Entre em contato</Heading>
                        <Typography>
                            <Typography>+351 229 374 590</Typography>
                            <Typography>+351 919 804 349</Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
            <Footer />
        </>
    );
};

export async function getStaticPaths() {
    const res = await fetch(`${hostname}/api/imoveis`);
    const { data } = await res.json();

    const paths = data.map((immobile: { attributes: { slug: string } }) => {
        return {
            params: { immobileSlug: immobile.attributes.slug },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export const loadImmobilesWithFilters = async (...params: string[]) => {
    try {
        const res = await fetch(
            `${hostname}/api/imoveis?${params}&&populate=deep`
        );
        const { data } = await res.json();

        if (!data) {
            return {
                notFound: true,
            };
        }
        return {
            data,
        };
    } catch {
        return {
            data: [],
        };
    }
};

export async function getStaticProps({ params }: any) {
    try {
        const res = await fetch(
            `${hostname}/api/imoveis?filters[slug]=${params.immobileSlug}&&populate=deep`
        );
        const { data: prevData } = await res.json();
        const id = prevData[0].id;

        // getting the data using the id
        const postRes = await fetch(`
    ${hostname}/api/imoveis/${id}?populate=deep
    `);
        const { data } = await postRes.json();

        if (!data) {
            return {
                notFound: true,
            };
        }
        return {
            props: { data },
        };
    } catch {
        return {
            props: {
                data: {},
            },
        };
    }
}

export default Catalogo;
