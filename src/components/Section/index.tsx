import * as Styled from "./styles";

export interface SectionType {
    justifyContent?: string;
    alignItems?: string;
    children?: React.ReactNode;
    full?: boolean;
    height?: string | number;
    className?: string;
    color?: string;
    id?: string;
}

export const Section = ({
    children,
    full,
    className,
    justifyContent,
    height,
    color,
    alignItems,
    id,
}: SectionType): JSX.Element => {
    const styles = {
        justifyContent: justifyContent,
        alignItems: alignItems,
        height: height,
        id: id,
        className: className,
    };
    return (
        <Styled.Container
            {...styles}
            full={full}
            color={color}
        >
            {children}
        </Styled.Container>
    );
};
