import * as Styled from "./styles";
import Link from "next/link";
import { Button, Drawer, IconButton } from "@mui/material";
import { Menu } from '@styled-icons/material'
import { useState } from "react";

export const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    return (
        <>
            <Styled.Container id="horizontal-nav">
                <Link href="/">
                    <Button>Início</Button>
                </Link>
                <Link href="/about">
                    <Button>Quem Somos</Button>
                </Link>
                <Link href="/catalogo">
                    <Button>Catálogo</Button>
                </Link>
                <Link href="/news">
                    <Button>Notícias do setor</Button>
                </Link>
                <Link href="/contact">
                    <Button>Contato</Button>
                </Link>
            </Styled.Container>
            <span id="drawer-nav-button">
                <IconButton color="primary" onClick={() => setMenuOpen(true)}><Menu height={25} width={25} /></IconButton>
            </span>
            <Drawer
                onClose={() => setMenuOpen(false)}
                anchor="right"
                open={isMenuOpen}
            >
                <Link href="/">
                    <Button>Início</Button>
                </Link>
                <Link href="/about">
                    <Button>Quem Somos</Button>
                </Link>
                <Link href="/catalogo">
                    <Button>Catálogo</Button>
                </Link>
                <Link href="/news">
                    <Button>Notícias do sector</Button>
                </Link>
                <Link href="/contact">
                    <Button>Contato</Button>
                </Link>
            </Drawer>
        </>
    );
};
