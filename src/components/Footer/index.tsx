import * as Styled from "./styles";
import { Grid, Typography, List } from "@mui/material";
import { Heading } from "../Heading";
import { BottomFooter } from "./BottomFooter";
import Link from "next/link";

export const Footer = () => {
    return (
        <Styled.Container>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid xs={12} md={4} item>
                    <Heading as="h2">Imoland</Heading>
                    <Typography>
                    A nossa missão é garantir-lhe uma experiência positiva e tranquila enquanto cumprimos o seu sonho imobiliário.
                    </Typography>
                </Grid>
                <Grid xs={12} md={6} container>
                    <Grid xs={12} md={6} item>
                        <Heading as="h3">Onde estamos</Heading>
                        <List>R. Alfredo Cunha, 155 - Loja 1</List>
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Heading as="h3">Links úteis</Heading>
                        <Link href="https://www.livroreclamacoes.pt/Inicio/">LIVRO DE RECLAMAÇÕES</Link>
                    </Grid>

                </Grid>
            </Grid>
            <hr />
            <BottomFooter />
        </Styled.Container>
    );
};
