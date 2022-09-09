import * as Styled from "./styles";
import defaultImage from '../../assets/imgs/construction_concept.jpg'
export interface BackgroundCapeType {
    justifyContent?: string;
    alignItems?: string;
    height: number;
    width: number;
    backgroundUrl?: any;
    color?: string;

}

export const BackgroundCape = ({
    backgroundUrl = defaultImage,
    height = 400,
    width,
    color,

}: BackgroundCapeType): JSX.Element => {
    const styles = {
        height: height,
        width: width,
        backgroundUrl: backgroundUrl,
        color: color,
    };
    return (
        <Styled.Container {...styles} />
    );
};
