/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@mui/material";
import Container from "@components/core/common/Container";
import portada from "@assets/img/portada.png";
import Logo from "@assets/img/Logo.png";
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
            xs: "100%",
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
            width: "100%",
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
          top: "30%",
          left: { xs: "10%", md: "40%", lg: "55%" },
          right: 0,
        }}
      >
        <Box bgcolor={"white"} data-aos="fade-right" sx={{ height: 200, p: 2 }}>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{ width: { xs: "250px", sm: "280px" }, pt: 2, pb: 3 }}
          />
        </Box>
        <Box bgcolor={"black"} data-aos="fade-right" sx={{ height: 100, p: 2 }}>
          <Typography
            variant="body2"
            fontSize={{ xs: "1.5rem", md: "2rem" }}
            width={{ xs: "100%", sm: "100%", md: "500px", lg: "500px" }}
            pb={1}
            data-aos="fade-right"
            color="white"
          >
            Innovación en la Consultoría
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Cover;
