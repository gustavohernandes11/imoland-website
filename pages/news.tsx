import React from "react";
import type { NextPage } from "next";
import { Section } from "../src/components/Section";
import { Heading } from "../src/components/Heading";
import { Footer } from "../src/components/Footer";
import { Modal } from "../src/components/Modal";
import { Header } from "../src/components/Header";
import { Grid, Typography, Paper } from "@mui/material";

const Contato: NextPage = () => {
    return (
        <>
            <Header />
            <Section full={true}>
                <Grid container xs={12} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Heading>Notícias</Heading>
                        <hr />
                        <Heading as="h2">
                            Portugal é um dos países do euro em que os juros dos
                            novos empréstimos à habitação são mais baixos. Desde
                            2015, a taxa dos novos financiamentos caiu para
                            metade.
                        </Heading>
                        <Typography paragraph>
                            Desde o início de 2015, ano em que os spreads
                            aplicados pelos bancos começaram a baixar, a taxa
                            dos novos financiamentos caiu para metade, adianta o
                            Diário de Notícias. Segundo os dados mais recentes
                            do Banco Central Europeu (BCE), os bancos cobram, em
                            média, 1,34% pelo novo crédito. No início de 2015, o
                            juro era de 2,78%.
                        </Typography>
                        <Typography paragraph>
                            A descida da margem de lucro dos bancos e a queda
                            das taxas Euribor levou a que os juros no crédito
                            encolhessem para mínimos. Além disso, como em
                            Portugal a taxa variável continua a ser
                            predominante, isso ajudou a que o custo do crédito à
                            habitação seja dos mais baixos da zona euro.
                        </Typography>
                        <Typography paragraph>
                            No entanto, apesar de ser cada vez mais barato pedir
                            crédito, o Banco de Portugal (BdP) mostrou
                            preocupação pelo facto de os spreads aplicados serem
                            cada vez mais baixos.
                        </Typography>
                        <Typography paragraph>
                            “A restritividade de outras condições, como os
                            spreads, permaneceu inalterada ou foi sinalizada
                            como estando em diminuição, devido às pressões
                            concorrenciais no mercado de crédito”, observou o
                            supervisor liderado por Carlos Costa no último
                            Relatório de Estabilidade Financeira.
                        </Typography>
                        <Typography paragraph>
                            Desde junho de 2015, analisou o BdP, a margem dos
                            bancos na diferença entre os juros que cobram no
                            crédito e os que pagam pelos depósitos é mais baixa
                            do que a média europeia. Os preços dos ativos
                            imobiliários e “os spreads praticados no crédito à
                            habitação e às empresas que continuam a diminuir”
                            são as exceções no que diz respeito à “acumulação de
                            risco sistémico cíclico“.
                        </Typography>
                        <Typography paragraph>
                            Segundo o DN, os baixos spreads podem ser um
                            problema e um sério risco para a estabilidade
                            financeira, dado que afetam a rentabilidade dos
                            bancos numa altura em que o setor ainda está a
                            tentar resolver problemas que foram criados durante
                            a crise.
                        </Typography>
                        <Typography paragraph>
                            Assim, para conseguirem bater a concorrência, os
                            bancos têm esmagado as margens de lucro que cobram
                            no crédito à habitação. Além de concederem crédito
                            mais barato, os bancos estão também a aumentar o
                            volume das operações.
                        </Typography>
                        <hr />
                        <Heading as="h2">
                            Venda de casas subiu 20% no primeiro semestre. Foram
                            vendidos 86.335 alojamentos familiares no valor
                            total de 11,6 mil milhões de euros.
                        </Heading>
                        <Typography paragraph>
                            O número de casas vendidas no primeiro semestre do
                            ano subiu 20%, mas o valor gerado por estas
                            transações foi 30,5% superior ao verificado em igual
                            período de 2017. Os dados são do gabinete de estudos
                            da Associação dos Profissionais e Empresas de
                            Mediação Imobiliária de Portugal (APEMIP) e mostram
                            que, nos primeiros seis meses do ano, foram
                            transacionados 86.335 alojamentos familiares
                            totalizando valores de venda na ordem dos 11,6 mil
                            milhões de euros.
                        </Typography>
                        <Typography paragraph>
                            As casas usadas estão a ganhar cada vez maior peso
                            no mercado, já que representaram mais de nove mil
                            milhões de euros, um aumento de 33,4% face ao
                            período homólogo.
                        </Typography>
                        <Typography paragraph>
                            “O mercado de usados é cada vez mais importante no
                            sector, uma vez que nos últimos anos a construção
                            nova foi muito escassa. A grande maioria do stock
                            imobiliário existente é de usados, havendo
                            necessidade de haver uma renovação do mesmo,
                            sobretudo nas principais cidades como Lisboa ou
                            Porto, que apresentam escassez de oferta face à
                            procura existente”, defende o presidente da APEMIP
                            em nota de imprensa.
                        </Typography>
                        <Typography paragraph>
                            A grande fatia destas transações ocorreu entre abril
                            e junho, com um total de 45.619 de alojamentos
                            familiares vendidos, mais 23,7% do que em igual
                            período de 2017, tornado este “o melhor trimestre de
                            que há registo”, com uma média de mais de 500 casas
                            vendidas por dia.
                        </Typography>
                        <Typography paragraph>
                            Em termos regionais, a Área Metropolitana de Lisboa
                            assegurou 16.331 das transações imobiliárias, um
                            aumento de 24,6% face ao período homólogo. O valor
                            global das transações foi de 3 mil milhões de euros.
                            Já na Área Metropolitana do Porto foram vendidas
                            7.801 casas, mais 23,4%, e que geraram mais de 900
                            milhões de euros.
                        </Typography>
                        <Typography paragraph>
                            Apesar das dinâmicas do mercado imobiliário serem
                            muito positivas, Luís Lima receia o impacto que as
                            recentes notícias e propostas feitas no âmbito do
                            sector, como a introdução de um novo escalão no
                            AIMI, a chamada “Taxa Robles”, ou a eventual
                            extinção do Regime Fiscal para Residentes Não
                            Habituais, possam ter no investimento estrangeiro em
                            Portugal. “Mesmo que acabem por não ser aprovadas, a
                            repercussão mediática destas propostas causam receio
                            a quem esteja a ponderar investir no imobiliário
                            português. Muitas vezes acabam por preferir não
                            arriscar, e dirigem o seu investimento para outros
                            países por considerarem que não é seguro investir em
                            Portugal, porque as regras podem mudar a meio do
                            jogo”, diz o presidente da APEMIP, sublinhando que
                            “ainda há muitas zonas do país a precisar deste
                            investimento”.
                        </Typography>
                        <Typography paragraph>
                            “Infelizmente, continuam a fazer-se propostas e a
                            tomar decisões a olhar para o País só a partir de
                            Lisboa, quando ainda há muitas regiões, sobretudo no
                            interior, que podem e precisam de beneficiar deste
                            tipo de investimento que aos poucos se está a
                            descentralizar”, acrescenta Luís Lima.
                        </Typography>
                    </Grid>
                </Grid>
            </Section>

            <Footer />
        </>
    );
};
export default Contato;
