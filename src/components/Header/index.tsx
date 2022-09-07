import { Heading } from "components/Heading";
import { HeaderConnect } from "./HeaderConnect";
import { Phone, Info } from "@styled-icons/material";
import { Nav } from "components/Nav";
import * as Styled from "./styles";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/imgs/logotipo_imoland.png";

export const Header = () => {
    return (
        <>
            <Styled.Container>
                <title>Imoland | Matosinhos</title>

                <HeaderConnect>
                    <span>
                        <Phone width={20} height={20} /> +351 919 804 349
                    </span>
                    <span>
                        <Info width={20} height={20} />
                        info@imoland.pt 2027 - AMI
                    </span>
                </HeaderConnect>
                <span className="container">
                    <Link href="/">
                        <Image
                            width={358 / 3}
                            height={130 / 3}
                            layout="fixed"
                            src={logo}
                            alt="Imagem do logotipo"
                        />
                    </Link>
                    <Nav />
                </span>
            </Styled.Container>
        </>
    );
};
