import React, { useState } from "react";
import type { NextPage } from "next";
import Carousel from "react-material-ui-carousel";
import { CheckBox } from "@styled-icons/material";
import construction_concept_image from "../src/assets/imgs/construction_concept.jpg";
import { Grid, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import Image from "next/image";
import { Section } from "components/Section";
import { Heading } from "components/Heading";
import { Modal } from "components/Modal";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { EmphasisSection } from "../src/sections/EmphasisSection";

import { hostname } from "../src/config";

const Home: NextPage = ({ data }: any) => {
    const [emphasisImmobiles] = useState(data);
    return (
        <>
            <Header />
            <Section id="apresentation-section" color="#f3f3f3">
                <Grid direction="row" container spacing={4}>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Image
                            className="image-modal"
                            src={construction_concept_image}
                            alt="Imagem de ilustração"
                            layout="intrinsic"
                            width={1500}
                            height={1000}
                        />
                    </Grid>
                    <Grid item xs={12} md={5} alignItems="center">
                        <Typography color="primary" variant="subtitle1">
                            Por que nos escolher?
                        </Typography>
                        <Heading>
                            {" "}
                            Imoland, a marca de serviços imobiliários, com
                            capacidade para prestar trabalhos de alta qualidade.
                        </Heading>
                        <p>
                            A procura do imóvel ideal para cada caso, com a
                            ajuda da melhor proposta de financiamento,
                            acompanhamento dos registos, escritura, participação
                            do I.M.I. e pedido de isenção autárquica.
                        </p>

                        <List>
                            <ListItem>
                                <ListItemIcon color="primary">
                                    <CheckBox width={30} height={30} />
                                </ListItemIcon>
                                Confiança!
                            </ListItem>
                            <ListItem>
                                <ListItemIcon color="primary">
                                    <CheckBox width={30} height={30} />
                                </ListItemIcon>
                                Comprometimento!
                            </ListItem>
                            <ListItem>
                                <ListItemIcon color="primary">
                                    <CheckBox width={30} height={30} />
                                </ListItemIcon>{" "}
                                Qualidade!
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Section>
            <Section color="#f9f9f9">
                <Grid direction="row" container xs={12} justifyContent="center">
                    <Grid xs={12} sm={4} p={2}>
                        <Typography mb={-1} color="primary">
                            Quero
                        </Typography>
                        <Heading>Comprar</Heading>
                        <Typography>
                            Imagine poder investir em um local só seu, e o ter a
                            posibilidade de ter o melhor imóveis, nos podemos
                            ajudar.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={4} p={2}>
                        <Typography mb={-1} color="primary">
                            Quero
                        </Typography>
                        <Heading>Vender</Heading>
                        <Typography>
                            Quer vender o seu imóvel? Podemos te ajudar, entre
                            em contato.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={4} p={2}>
                        <Typography mb={-1} color="primary">
                            Quero
                        </Typography>
                        <Heading>Arrendamento</Heading>
                        <Typography>
                            Busca uma casa ou apartamento para areendar, temos
                            as melhores opções.
                        </Typography>
                    </Grid>
                </Grid>
            </Section>
            <EmphasisSection data={emphasisImmobiles} />
            <Footer />
        </>
    );
};

export default Home;

export async function getStaticProps({ params }: any) {
    try {
        const res = await fetch(
            `${hostname}/api/imoveis?populate=deep&filters[Immobile_post][Emphasize]=true`
        );
        const { data } = await res.json();

        if (!data) {
            return {
                data: {},
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

//<a href="https://br.freepik.com/fotos-gratis/conceito-de-construcao-com-ferramentas-de-engenharia_5519366.htm#query=casas&position=4&from_view=search">Image by jcomp</a> on Freepik
