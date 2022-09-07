import * as Styled from "./styles";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import {
    Autocomplete,
    TextField,
    Grid,
    Button,
    Typography,
} from "@mui/material";

export const SearchBox = ({ businessType, immobileType }: any) => {
    const [, actions] = useGlobalContext();
    const initialFilters = {
        filter_businessType: null,
        filter_immobileType: null,
        filter_county: null,
        filter_district: null,
    };

    const options = {
        businessType: businessType,
        immobileType: immobileType,
        county: [],
        district: [],
    };
    return (
        <Styled.Container>
            <Grid container xs={12} direction="column" gap={1} mb={2}>
                <Grid container>
                    <Typography mb={1} variant="caption">
                        Opções de filtro
                    </Typography>
                </Grid>
                <Grid container xs={12} direction="row" gap={1}>
                    <Grid
                        container
                        xs={12}
                        sx={{ flexWrap: "wrap" }}
                        md={12}
                        gap={2}
                    >
                        <Autocomplete
                            disablePortal
                            onChange={(e) => {
                                console.log(e);
                                actions.setBusinessTypeFilter(
                                    (e.target as HTMLElement).innerText
                                );
                            }}
                            id="search-form-tipos-de-negocio"
                            options={options.businessType}
                            sx={{ flex: 1 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Tipo de negócio"
                                />
                            )}
                        />
                        <Autocomplete
                            disablePortal
                            onChange={(e) =>
                                actions.setImmobileTypeFilter(
                                    (e.target as HTMLElement).innerText
                                )
                            }
                            id="search-form-tipos-de-imoveis"
                            options={options.immobileType}
                            sx={{ flex: 1 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Tipo de imóvel" />
                            )}
                        />

                        <Autocomplete
                            disablePortal
                            onChange={(e) =>
                                actions.setCountyFilter(
                                    (e.target as HTMLElement).innerText
                                )
                            }
                            id="search-form-concelho"
                            disabled={!!options.county}
                            options={options.county}
                            sx={{ flex: 1 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Concelho" />
                            )}
                        />
                        <Autocomplete
                            disablePortal
                            onChange={(e) =>
                                actions.setDistrictFilter(
                                    (e.target as HTMLElement).innerText
                                )
                            }
                            id="search-form-distrito"
                            disabled={!!options.district}
                            options={options.district}
                            sx={{ flex: 1 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Distrito" />
                            )}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Styled.Container>
    );
};
