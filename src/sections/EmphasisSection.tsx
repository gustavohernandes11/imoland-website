import { Section } from "../components/Section";
import { Heading } from "../components/Heading";
import { ImmobileModal, ModalWrapper } from "../components/ImmobileModal";
import { Grid, Button } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";

import { hostname } from "../config";
export const EmphasisSection = ({ data = [] }: any) => {
    const [immobilePosts] = useState(data);

    return (
        <Section id="section-1" full={true}>
            <Heading>Destaques</Heading>
            <ModalWrapper>
                {immobilePosts.length > 0 &&
                    immobilePosts.map((e: any) => {
                        return (
                            <ImmobileModal
                                key={e.id}
                                row={false}
                                src={`${e.attributes.Gallery[0].Cape.data[0].attributes.url}`}
                                alt={"Imagem capa do post"}
                                name={
                                    e.attributes.Immobile_post?.Name
                                }
                                slug={!!e.attributes.slug && e.attributes.slug}
                                price={
                                    !!e.attributes.Immobile_post.Price &&
                                    e.attributes.Immobile_post.Price
                                }
                                n_bathrooms={
                                    !!e.attributes.Immobile_post.Informations
                                        .N_Bathrooms &&
                                    e.attributes.Immobile_post.Informations
                                        .N_Bathrooms
                                }
                                n_bedrooms={
                                    !!e.attributes.Immobile_post.Informations
                                        .N_Bedrooms &&
                                    e.attributes.Immobile_post.Informations
                                        .N_Bedrooms
                                }
                                n_garbage={
                                    !!e.attributes.Immobile_post.Informations
                                        .N_Garage &&
                                    e.attributes.Immobile_post.Informations
                                        .N_Garage
                                }
                                squareMeters={
                                    !!e.attributes.Immobile_post.Informations
                                        .Area &&
                                    e.attributes.Immobile_post.Informations.Area
                                }
                                location={
                                    !!e.attributes.Immobile_post.Localization &&
                                    e.attributes.Immobile_post.Localization
                                }
                                category={
                                    !!e.attributes.Immobile_post
                                        .Immobile_type &&
                                    e.attributes.Immobile_post.Immobile_type
                                }
                            />
                        );
                    })}
            </ModalWrapper>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                mt={2}
                xs={12}
            >
                <Link href="catalogo">
                    <Button variant="contained">Ver todos!</Button>
                </Link>
            </Grid>
        </Section>
    );
};
