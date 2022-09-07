 /* eslint-disable */
 import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <meta name="language" content="Portuguese" />
                    <meta name="revisit-after" content="3 days" />
                    <meta name="title" content="Imoland | Matosinhos" />
                    <meta
                        name="description"
                        content="A IMOLAND Mediação Imobiliária, é uma Empresa do sector Imobiliário com sede no Concelho de Matosinhos, Distrito do Porto desde 1997."
                    />

                    {/* Fonte Century Gothic */}
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/oov2wcw.css"
                    ></link>
                    {/* Fonte Raleway */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,900;1,400&display=swap"
                        rel="stylesheet"
                    />
                    {/* Raleway */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,400;0,700;1,400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
