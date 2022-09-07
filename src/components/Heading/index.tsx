import * as Styled from "./styles";
import { Typography } from "@mui/material";

interface HeadingType {
    children: React.ReactNode;
    id?: any;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    subHeading?: string;
    className?: string;
}

export const Heading = ({
    children,
    id,
    as = "h1",
    className,
    subHeading,
}: HeadingType) => {
    return (
        <>
            <Styled.Wrapper className={className} as={as} id={id}>
                {children}
            </Styled.Wrapper>
            <Typography color="primary" variant="subtitle1">{subHeading}</Typography>
        </>
    );
};
