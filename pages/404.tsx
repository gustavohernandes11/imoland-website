import React from "react";
import type { NextPage } from "next";
import { Section } from "components/Section";
import { Heading } from "components/Heading";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import Link from "next/link";
import { Grid, Button } from "@mui/material";
import empresa from "../src/assets/imgs/grupo-de-pessoas.webp";

const Page404: NextPage = () => {
    return (
        <>
            <Header />
            <Section full={true} alignItems="center">
                <Grid
                    direction="column"
                    container
                    xs={12}
                    gap={1}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading>404</Heading>
                    <Heading as="h2">
                        Houve um problema ao carregar os dados!
                    </Heading>
                    <Link href="/">
                        <Button variant="contained">Voltar ao Início</Button>
                    </Link>
                </Grid>
            </Section>

            <Footer />
        </>
    );
};
export default Page404;
