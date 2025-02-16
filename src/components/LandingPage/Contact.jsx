import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Icon,
  Link,
  Stack,
  Divider
} from "@mui/material";
import Container from "@components/core/common/Container";
import portada from "@assets/img/contact.png";
import Slogan from "@assets/img/slogan.png";
import QRCode from "@assets/img/qr-code.png";
import Logo from "@assets/img/Higo_logo.png";
import { orange } from "@mui/material/colors";

const Contact = () => {
  const imgRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  const updateImageHeight = () => {
    if (imgRef.current) setImageHeight(imgRef.current.clientHeight);
  };

  useEffect(() => {
    updateImageHeight();

    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portada]);

  return (
    <Box component="section">
      {/* Imagen */}
      <Box
        sx={{
          height: "100vh",
          minHeight: "400px",
          maxHeight: {
            xs: "10%",
            sm: imageHeight ? `${imageHeight}px` : "100%",
          },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={portada}
          alt="higoasesores"
          ref={imgRef}
          sx={{
            width: { xs: 'auto', sm: 'auto', md: '100%', lg: "100%" },
            height: { xs: "100%", sm: "auto" },
            minHeight: "400px",
            position: "absolute",
            objectFit: { xs: "cover", sm: "contain" },
            zIndex: 0,
          }}
          onLoad={updateImageHeight}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(29, 42, 67, 0) 0%, #FFFFFF 100%)",
          }}
        />
      </Box>

      {/* Texto flotante */}
      <Container sx={{
        position: "absolute",
        top: { xs: "10%", sm: '15%' },
        left: { xs: "15%", sm: '25%', md: '35%', lg: '40%' },
      }} >
        <Stack spacing={1}>

          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              height: { xs: '100px', sm: 'auto' },
              width: { xs: "250px", sm: "280px" }, pt: 2, pb: 3
            }}
          />



          <Typography
            fontSize={{ xs: "2rem", md: "3rem" }}
            color="#404040"
            fontWeight={400}
            data-aos="fade-left"
          >
            ¡HAZ CONTACTO!
          </Typography>

          <Stack direction={'row'} spacing={1} divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: orange['A400'] }} />}>
            <Stack spacing={2} data-aos="fade-up">
              <Icon fontSize="lg">phone_iphone</Icon>
              <Icon fontSize="lg">mail</Icon>
              <Icon fontSize="lg">language</Icon>
            </Stack>

            <Stack spacing={2} data-aos="fade-up">
              <Link
                href="tel:4777136887"
                color="inherit"
                underline="none"
              >
                (418)1182273 y (477)1266060
              </Link>
              <Link
                href="mailto:contacto@higoasesores.com"
                color="inherit"
                underline="none"
              >
                contacto@higoasesores.com
              </Link>
              <Link
                href="https://higoasesores.com"
                color="inherit"
                underline="none"
              >
                higoasesores.com
              </Link>
            </Stack>
          </Stack>

        </Stack>


      </Container>

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


          <Box
            component="img"
            src={QRCode}
            alt="logo"
            sx={{ height: { xs: "150px" }, pt: 2, pb: 3 }}
          />
        </Stack>
      </Container>

    </Box>
  );
};

export default Contact;
