import {
  Box,
  Grid2,
  Typography,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import banner from "@assets/img/portada.png";
import Image from "@components/core/Image/Image";
import { grey } from "@mui/material/colors";

const Description = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }}>
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
            pl: { xs: 2, md: 4, lg: 8 },
            pr: { xs: 2, md: 2, lg: 4 },
            gap: 4,
          }}
        >
          <Typography
            fontWeight={900}
            fontSize={{ xs: "1.5rem", md: "2.5rem" }}
            sx={{ color: theme.palette.info.main }}
            data-aos="fade-right"
          >
            ¿Qué somos?
          </Typography>
          <Typography
            fontSize={{ xs: "1.5rem", md: "2.2rem" }}
            color={grey[600]}
            data-aos="fade-right"
          >
            Grupo multidisciplinario que acompaña y brinda asesoría integral
            especializada, dirigida principalmente a la{" "}
            <strong>Administración Pública.</strong>
          </Typography>
        </Box>
      </Grid2>

      {!isMobile && (
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: "100vh",
              borderRadius: 0,
              boxShadow: 10,
              position: "relative",
            }}
          >
            <Image src={banner} effect="blur" ratio="1/1" />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(29, 42, 67, 0) 0%, #1D2A43 100%)",
              }}
            />
          </Card>
        </Grid2>
      )}
    </Grid2>
  );
};

export default Description;
