import React from "react";
import type { NextPage } from "next";
import { Section } from "components/Section";
import { Heading } from "components/Heading";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import Image from "next/image";
import { Grid } from "@mui/material";
import empresa from "../src/assets/imgs/grupo-de-pessoas.webp";

const About: NextPage = () => {
    return (
        <>
            <Header />
            <Section>
                <Grid
                    direction="row"
                    container
                    xs={12}
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <Grid
                        item
                        xs={12}
                        md={5}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Image
                            className="image-modal"
                            src={empresa}
                            alt="Imagem de exemplo"
                            layout="responsive"
                        />
                    </Grid>
                    <Grid item xs={12} md={5} alignItems="center">
                        <Heading>Quem somos</Heading>
                        <p>
                            A IMOLAND Mediação Imobiliária, é uma Empresa do
                            sector Imobiliário com sede no Concelho de
                            Matosinhos, Distrito do Porto desde 1997, portadora
                            da Licença A.M.I. 2027, Associada nº 835 da
                            A.P.E.M.I.P. (Associação dos Profissionais e
                            Empresas de Mediação Imobiliária de Portugal).
                        </p>

                        <p>
                            Ao longo do tempo, adquirimos experiência e
                            profissionalismo, para o encaminhamento e
                            aconselhamento dos negócios de Imobiliária, que tem
                            como base, princípios morais e éticos para a
                            aproximação, entendimento e imparcialidade, na
                            gestão de bens e membros envolvidos.
                        </p>
                        <p>
                            Os profissionais da Imoland, acompanham todas as
                            fases de aquisição de imóveis.
                        </p>

                        <p>
                            A procura do imóvel ideal para cada caso, com a
                            ajuda da melhor proposta de financiamento,
                            acompanhamento dos registos, escritura, participação
                            do I.M.I. e pedido de isenção autárquica.
                        </p>

                        <p>
                            Imoland, a marca de serviços imobiliários, com
                            capacidade para prestar trabalhos de alta qualidade.
                        </p>

                        <p>Venha conhecer-nos!</p>
                    </Grid>
                </Grid>
            </Section>

            <Footer />
        </>
    );
};
export default About;
