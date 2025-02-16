import { Typography, Grid2, useTheme, Box, Stack } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Image from "@components/core/Image/Image";
import { lines } from "./data";

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

const ActionLines = () => {
  const theme = useTheme();
  return (
    <Box component={"section"}>
      <Box
        id="lines"
        minHeight={"100vh"}
        sx={{
          p: 3,
          justifyContent: { xs: "space-evenly", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 8,
        }}
      >
        <Grid2 container spacing={4} textAlign={"center"}>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 8 }} data-aos="fade-down">
            <Typography
              fontWeight={900}
              fontSize={{ xs: "1.5rem", md: "2.5rem" }}
              sx={{ color: theme.palette.error.main }}
            >
              Principales líneas de acción
            </Typography>
          </Grid2>
          {lines.map((item, k) => (
            <Grid2 size={{ xs: 12, md: 3 }} data-aos="fade-right" key={k}>
              <Stack>
                <Image
                  src={item.image}
                  effect="blur"
                  ratio="1/1"
                  sx={{
                    width: "100%",
                  }}
                />
                <ScrollLink
                  to={item.route}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontWeight: 700,
                    fontSize: 14,
                    transition: "all 200ms ease",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    fontWeight={900}
                    fontSize={{ xs: "1.1rem", md: "1.7rem" }}
                    sx={{
                      color: theme.palette.error.main,
                    }}
                  >
                    {item.label}
                  </Typography>
                </ScrollLink>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Box>

      {lines.map((item) => (
        <Box
          id={item.route}
          minHeight={"100vh"}
          sx={{
            p: 3,
            flexDirection: { xs: "column", md: "row" },
            gap: 8,
          }}
          key={item.route}
        >
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12 }} sx={{ mt: 8 }} data-aos="fade-down">
              <Typography
                variant="h4"
                sx={{ color: theme.palette.primary.dark }}
                textAlign={"center"}
              >
                {item.title}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} data-aos="fade-up">
              <Stack alignItems={"center"} textAlign={"center"}>
                <Image
                  src={item.image}
                  effect="blur"
                  ratio="4/3"
                  sx={{
                    width: "80%",
                  }}
                />
                <Typography
                  fontWeight={900}
                  fontSize={{ xs: "1.1rem", md: "1.7rem" }}
                  sx={{
                    color: theme.palette.error.main,
                  }}
                >
                  {item.label}
                </Typography>
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} data-aos="fade-up">
              <Stack spacing={2}>
                {item.items.map((text, i) => (
                  <Typography key={i}>
                    <CheckIcon /> {text}
                  </Typography>
                ))}
              </Stack>
            </Grid2>
          </Grid2>
        </Box>
      ))}
    </Box>
  );
};

export default ActionLines;
