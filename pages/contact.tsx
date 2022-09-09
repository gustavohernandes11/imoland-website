import React from "react";
import type { NextPage } from "next";
import { Section } from "../src/components/Section";
import { Heading } from "../src/components/Heading";
import { Modal } from "../src/components/Modal";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Phone, Email, CorporateFare } from "@styled-icons/material";
import { Grid, Typography, Paper } from "@mui/material";

const Contato: NextPage = () => {
    return (
        <>
            <Header />
            <Section full={true}>
                <Grid
                    container
                    xs={12}
                    gap={1}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading>Entre em contato conosco!</Heading>
                </Grid>
                <Grid mt={3} container xs={12}>
                    <Grid
                        container
                        xs={12}
                        md={4}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Modal>
                            <Phone width={25} height={25} />
                            <Heading as="h2">Telefone</Heading>
                            <Typography>+351 229 374 590</Typography>
                            <Typography>+351 919 804 349</Typography>
                        </Modal>
                    </Grid>
                    <Grid
                        container
                        xs={12}
                        md={4}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Modal>
                            <Email width={25} height={25} />
                            <Heading as="h2">Email</Heading>
                            <Typography>info@imoland.net</Typography>
                        </Modal>
                    </Grid>
                    <Grid
                        container
                        xs={12}
                        md={4}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Modal>
                            <CorporateFare width={25} height={25} />
                            <Heading as="h2">Endereço</Heading>
                            <Typography>R. Alfredo Cunha 155</Typography>
                            <Typography>Loja 1 - 4450-023</Typography>
                            <Typography>Matosinhos, Portugal</Typography>
                        </Modal>
                    </Grid>
                </Grid>
            </Section>

            <Footer />
        </>
    );
};
export default Contato;
