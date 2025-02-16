/* eslint-disable react/prop-types */

import { Typography, Grid2, useTheme, Box, Stack, useMediaQuery } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Image from "@components/core/Image/Image";
import { grey } from "@mui/material/colors";

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 16 16"
        data-v-1f3e6767=""
    >
        <g data-v-1f3e6767="">
            <path
                fill="#00b090"
                d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                data-v-1f3e6767=""
            ></path>
        </g>
    </svg>
);

const ActionLine = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { item } = props
    return (
        <Grid2 container key={item?.route} id={item?.route}>
            <Grid2 size={{ xs: 12, md: 6 }} >
                <Box
                    height="100vh"
                    minHeight={400}
                    sx={{
                        overflow: "hidden",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                        pl: { xs: 1 },
                        pr: { xs: 2, md: 2, lg: 4 },
                        gap: 4,
                        ml: { xs: '1%', md: '5%' },
                    }}
                >
                    <Stack direction={'row'} spacing={2}>

                        <Stack>
                            <Typography
                                fontWeight={400}
                                fontFamily={"Gill Sans"}
                                fontSize={{ xs: "1.5rem", md: "2rem" }}
                                lineHeight={{ xs: "1.5rem", md: "2rem" }}
                                sx={{ color: theme.palette.info.main }}
                                data-aos="fade-right"
                            >
                                {item?.label.toUpperCase()}
                            </Typography>
                            <Stack spacing={1} sx={{ ml: 2 }}>
                                {item?.items.map((text, i) => (
                                    <Typography
                                        key={i}
                                        variant="body2"
                                        fontSize={{ xs: '1rem', sm: '1.5rem' }}
                                        color={grey[600]}
                                        data-aos="fade-right"
                                        fontFamily={"Gill Sans"}>
                                        <CheckIcon /> {text}
                                    </Typography>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>

                </Box>
            </Grid2>

            {!isMobile && (
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Image
                        src={item?.image}
                        effect="blur"
                        ratio="1/1"
                        sx={{
                            width: "100%",
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "50%",
                            height: "100%",
                            background: `
                linear-gradient(to left, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.8) 90%, #FFFFFF 100%)`

                        }}
                    />
                </Grid2>
            )}


        </Grid2>
    )
}

export default ActionLine;