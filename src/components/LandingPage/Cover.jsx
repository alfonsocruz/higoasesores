/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Stack, Typography } from "@mui/material";
import Container from "@components/core/common/Container";
import portada from "@assets/img/portada2.png";
import Flecha from "@assets/img/flecha.png";
import Slogan from "@assets/img/slogan.png";
import Logo from "@assets/img/Higo_logo.png";
import { useState, useRef, useEffect } from "react";

const Cover = () => {
  const imgRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  const updateImageHeight = () => {
    if (imgRef.current) setImageHeight(imgRef.current.clientHeight);
  };

  useEffect(() => {
    updateImageHeight();

    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
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
      </Box>

      {/* Texto flotante */}
      <Container
        sx={{
          position: "absolute",
          top: { xs: "35%", sm: '30%', md: '30%', lg: "30%" },
          left: { xs: "15%", sm: '25%', md: '35%', lg: '40%' },
          // right: 0,
        }}
      >
        <Box
          data-aos="fade-up"
          component="img"
          src={Logo}
          alt="logo"
          sx={{ width: { xs: "250px", sm: "280px" }, pt: 2, pb: 3, }}

        />

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
          <Stack direction={'row'} spacing={2}>
            <Box
              component="img"
              src={Flecha}
              alt="logo"
              sx={{ height: { xs: "90px" }, pt: 2, pb: 3 }}
            />
            <Box
              component="img"
              src={Slogan}
              alt="logo"
              sx={{ height: { xs: "90px" }, pt: 2, pb: 3 }}
            />
          </Stack>
          <Typography variant="body2" fontWeight={600}>
            higoasesores.com
          </Typography>
        </Stack>
      </Container>

    </Box>
  );
};

export default Cover;
