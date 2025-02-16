import {
  Box,
  Grid2,
  Typography,
  Card,
  useTheme,
  Container,
  Stack,
  useMediaQuery,
} from "@mui/material";
import Img1 from "@assets/img/1.png";
import Img2 from "@assets/img/2.png";
import Img3 from "@assets/img/3.png";
import Image from "@components/core/Image/Image";
import { grey } from "@mui/material/colors";
import Flecha from "@assets/img/flecha_n.png";
import Slogan from "@assets/img/slogan.png";

const Description = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 8 }} >
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
            ml: { xs: '10%', md: '15%' },
            mr: { xs: '10%', md: '15%' },
          }}
        >
          <Stack direction={'row'} spacing={2}>
            {!isMobile && (
              <Box
                component="img"
                src={Flecha}
                alt="logo"
                sx={{ height: { xs: "250px", sm: "40", md: '100' }, pt: 2, pb: 3 }}
              />
            )}
            <Stack>
              <Typography
                fontWeight={400}
                fontFamily={"Gill Sans"}
                fontSize={{ xs: "2rem", md: "3rem", lg: '6rem' }}
                lineHeight={{ xs: "2rem", md: "3rem", lg: '6rem' }}
                sx={{ color: theme.palette.info.main }}
                data-aos="fade-right"
              >
                ¿QUÉ SOMOS?
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
            </Stack>
          </Stack>

        </Box>
      </Grid2>

      {!isMobile && (
        <Grid2 size={{ xs: 12, md: 4 }}>
          {/* <Card
            sx={{
              height: "100vh",
              borderRadius: 0,
              boxShadow: 10,
              position: "relative",
            }}
          >
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
          </Card> */}
          <Card
            sx={{
              height: "100vh",
              borderRadius: 0,
              boxShadow: 10,
              position: "relative",
            }}
          >
            <Stack direction={'column'}>
              <Image src={Img1} effect="blur" ratio="1/1" />
              <Image src={Img2} effect="blur" ratio="1/1" />
              <Image src={Img3} effect="blur" ratio="1/1" />
            </Stack>
          </Card>

        </Grid2>
      )}

      <Container
        sx={{
          position: "absolute",
          bottom: '0%',
          left: '1%',
          right: '1%'
          // right: 0,
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={"center"}
          justifyContent={"space-between"}
          mb={2}
        >
          <Box
            component="img"
            src={Slogan}
            alt="logo"
            sx={{ height: { xs: "90px" }, pt: 2, pb: 3 }}
          />

        </Stack>
      </Container>
    </Grid2>
  );
};

export default Description;
