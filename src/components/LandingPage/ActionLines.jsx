import { Typography, Grid2, useTheme, Box, Stack } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Image from "@components/core/Image/Image";
import { lines } from "./data";
import { grey } from "@mui/material/colors";

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
        <Grid2 container spacing={8}>
          <Grid2 size={{ xs: 12 }} sx={{ mt: '10%' }} data-aos="fade-down">
            <Typography
              fontWeight={900}
              fontSize={{ xs: "1.5rem", md: "2.5rem" }}
              sx={{ color: theme.palette.info.main }}
              textAlign={'center'}
            >
              PRINCIPALES LÍNEAS DE ACCIÓN
            </Typography>
          </Grid2>
          {lines.map((item, k) => (
            <Grid2 size={{ xs: 12, md: 3 }} data-aos="fade-right" key={k}>
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
                <Stack spacing={4}>
                  <Image
                    src={item.image}
                    effect="blur"
                    ratio="2/3"
                    sx={{
                      width: "100%",
                      borderRadius: '50px 50px 250px 250px',
                    }}
                  />

                  <Typography
                    fontWeight={900}
                    fontSize={{ xs: "1.1rem", md: "1.2rem" }}
                    textAlign={'center'}
                    sx={{
                      mr: { xs: 2, md: 8 },
                      ml: { xs: 2, md: 8 },
                      color: grey[600]
                    }}
                  >
                    {item.label}
                  </Typography>

                </Stack>
              </ScrollLink>
            </Grid2>
          ))}
        </Grid2>

      </Box>
    </Box >
  );
};

export default ActionLines;
