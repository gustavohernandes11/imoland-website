import * as Styled from "./styles";
import { Button, Grid, Typography, Stack, Chip } from "@mui/material";
import { DirectionsCar, KingBed, Bathtub } from "@styled-icons/material";
import { ArrowsExpand } from "@styled-icons/heroicons-outline";
import Logo from '../../assets/imgs/logotipo_imoland.png'

import { Heading } from "../Heading";
import Image from "next/image";
import Link from "next/link";

interface ImmobileModalType {
    src: any;
    alt: string;
    name?: string;
    category?: string;
    price?: string | number;
    n_bathrooms?: string | number;
    n_garbage?: string | number;
    n_bedrooms?: string | number;
    location?: string;
    squareMeters?: string;
    row?: any;
    slug?: string;
}

export const ModalWrapper = ({ children }: any) => {
    return (
        <Grid xs={12} container spacing={1}>
            {children}
        </Grid>
    );
};

export const ImmobileModal = ({
    src = Logo,
    alt,
    name = "-",
    category = "-",
    price = "-",
    n_bathrooms = "-",
    n_bedrooms = "-",
    n_garbage = "-",
    location = "-",
    squareMeters = "-",
    row = false,
    slug,
}: ImmobileModalType) => {
    if (row == true) {
        const propsWrapper = {
            row: true,
        };
        return (
            <Grid xs={12} item justifyContent="center" alignItems="center">
                <Styled.Modal {...propsWrapper}>
                    <Grid container xs={12}>
                        <Grid container xs={12} sm={4}>
                            <Image
                                layout="intrinsic"
                                width={450}
                                height={300}
                                src={src}
                                alt={alt}
                            />
                        </Grid>
                        <Grid container xs={12} sm={8}>
                            <span className="immobile-modal-body">
                                <Grid container justifyContent="space-between">
                                    <Heading className="immobile-title" as="h3">
                                        {name}
                                    </Heading>
                                    <Grid mt={1} mb={1} item>
                                        <Chip
                                            label={category}
                                            className="chip-immobile"
                                            color="primary"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container direction="column">
                                    <Typography className="immobile-price">
                                        {price}
                                    </Typography>
                                    <Typography>{location}</Typography>
                                </Grid>

                                <Styled.InformationModal {...propsWrapper}>
                                    <span>
                                        <Bathtub width={20} height={20} />
                                        <p>{n_bathrooms}</p>
                                    </span>
                                    <span>
                                        <KingBed width={20} height={20} />
                                        <p>{n_bedrooms}</p>
                                    </span>
                                    <span>
                                        <DirectionsCar width={20} height={20} />
                                        <p>{n_garbage}</p>
                                    </span>
                                    <span>
                                        <ArrowsExpand width={20} height={20} />
                                        <p>{squareMeters}</p>
                                    </span>
                                </Styled.InformationModal>
                                <Styled.ModalFooter {...propsWrapper}>
                                    <Link href={`/catalogo/${slug}`}>
                                        <Button variant="outlined">
                                            Ver detalhes
                                        </Button>
                                    </Link>
                                </Styled.ModalFooter>
                            </span>
                        </Grid>
                    </Grid>
                </Styled.Modal>
            </Grid>
        );
    }
    return (
        <Grid
            xs={12}
            sm={6}
            md={4}
            item
            justifyContent="center"
            alignItems="center"
        >
            <Styled.Modal>
                <Image
                    layout="intrinsic"
                    width={300}
                    height={300}
                    src={src}
                    alt={alt}
                />
                <span className="immobile-modal-body">
                    <Grid container justifyContent="space-between">
                        <Chip label={category} color="primary" />
                    </Grid>
                    <Heading className="immobile-title" as="h3">
                        {name}
                    </Heading>
                    <Grid container justifyContent="space-between">
                        <Typography>{location}</Typography>
                        <Typography className="immobile-price">
                            {price}
                        </Typography>
                    </Grid>

                    <Styled.InformationModal>
                        <span>
                            <Bathtub width={20} height={20} />
                            <p>{n_bathrooms}</p>
                        </span>
                        <span>
                            <KingBed width={20} height={20} />
                            <p>{n_bedrooms}</p>
                        </span>
                        <span>
                            <DirectionsCar width={20} height={20} />
                            <p>{n_garbage}</p>
                        </span>
                        <span>
                            <ArrowsExpand width={20} height={20} />
                            <p>{squareMeters}</p>
                        </span>
                    </Styled.InformationModal>
                    <Styled.ModalFooter>
                        <Link href={`/catalogo/${slug}/`}>
                            <Button variant="outlined">Ver detalhes</Button>
                        </Link>
                    </Styled.ModalFooter>
                </span>
            </Styled.Modal>
        </Grid>
    );
};
