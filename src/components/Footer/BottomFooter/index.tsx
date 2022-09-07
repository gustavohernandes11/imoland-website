import * as Styled from "./styles";
import { Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@styled-icons/boxicons-logos";
import Link from "next/link";

export const BottomFooter = () => {
    return (
        <Styled.Container>
            <Grid xs={6} container>{`© 2022 Copyright Imoland`}</Grid>

            <Grid xs={6} container justifyContent="end">
                <IconButton href="https://google.com">
                    <Link href="https://www.facebook.com/imolandimobiliaria/">
                        <Facebook width={20} height={20} />
                    </Link>
                </IconButton>
            </Grid>
        </Styled.Container>
    );
};
