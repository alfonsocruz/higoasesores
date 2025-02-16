import {
  Box,
  Grid2,
  Card,
  useTheme,
  useMediaQuery,
  CardHeader,
  Typography,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Icon,
  Link,
  Avatar,
} from "@mui/material";
import banner from "@assets/img/portada.png";
import Image from "@components/core/Image/Image";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component="section">
      <Grid2 container>
        {!isMobile && (
          <Grid2 size={{ xs: 12, md: 8 }}>
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
                  // background:
                  //   "linear-gradient(180deg, rgba(29, 42, 67, 0) 0%, #1D2A43 100%)",
                }}
              />
            </Card>
          </Grid2>
        )}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box
            height={"100vh"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              pl: { xs: 2, md: 2, lg: 4 },
              pr: { xs: 2, md: 2, lg: 4 },
              gap: 4,
            }}
          >
            <Card sx={{ m: 0, p: 2, backgroundColor: "transparent" }}>
              <CardHeader
                textAlign="center"
                title={
                  <Typography
                    fontSize={{ xs: "2rem", md: "3rem" }}
                    color="#404040"
                    fontWeight={800}
                    data-aos="fade-left"
                  >
                    ¡Haz contacto!
                  </Typography>
                }
                sx={{ minHeight: "20%", textAlign: "center" }}
              />
              <CardContent sx={{ m: 0, p: 0, backgroundColor: "transparent" }}>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem data-aos="fade-left">
                    <ListItemText
                      sx={{ backgroundColor: "#404040" }}
                      primary={
                        <Typography
                          variant="body2"
                          fontSize={{ xs: "1rem", lg: "1.3rem" }}
                          width={"100%"}
                          pb={1}
                          color="white"
                          align="right"
                          sx={{ mr: 2, pr: 4 }}
                        >
                          HIGO Asesores
                        </Typography>
                      }
                    />
                    <ListItemAvatar sx={{ ml: 2 }}>
                      <Avatar>
                        <Icon fontSize="lg">person</Icon>
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>
                  <ListItem data-aos="fade-left">
                    <ListItemText
                      sx={{ backgroundColor: "#404040" }}
                      primary={
                        <Typography
                          variant="body2"
                          fontSize={{ xs: "1rem", lg: "1.3rem" }}
                          width={"100%"}
                          pb={1}
                          color="white"
                          align="right"
                          sx={{ mr: 2, pr: 4 }}
                        >
                          <Link
                            href="tel:4777136887"
                            color="inherit"
                            underline="none"
                          >
                            (418)1182273 y (477)1266060
                          </Link>
                        </Typography>
                      }
                    />
                    <ListItemAvatar sx={{ ml: 2 }}>
                      <Avatar>
                        <Icon fontSize="lg">phone_iphone</Icon>
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>

                  <ListItem data-aos="fade-left">
                    <ListItemText
                      sx={{ backgroundColor: "#404040" }}
                      primary={
                        <Typography
                          variant="body2"
                          fontSize={{ xs: "1rem", lg: "1.3rem" }}
                          width={"100%"}
                          pb={1}
                          color="white"
                          align="right"
                          sx={{ mr: 2, pr: 4 }}
                        >
                          <Link
                            href="mailto:contacto@higoasesores.com"
                            color="inherit"
                            underline="none"
                          >
                            contacto@higoasesores.com
                          </Link>
                        </Typography>
                      }
                    />
                    <ListItemAvatar sx={{ ml: 2 }}>
                      <Avatar>
                        <Icon fontSize="lg">mail_outline</Icon>
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>

                  <ListItem data-aos="fade-left">
                    <ListItemText
                      sx={{ backgroundColor: "#404040" }}
                      primary={
                        <Typography
                          variant="body2"
                          fontSize={{ xs: "1rem", lg: "1.3rem" }}
                          width={"100%"}
                          pb={1}
                          color="white"
                          align="right"
                          sx={{ mr: 2, pr: 4 }}
                        >
                          <Link
                            href="https://higoasesores.com"
                            color="inherit"
                            underline="none"
                          >
                            higoasesores.com
                          </Link>
                        </Typography>
                      }
                    />
                    <ListItemAvatar sx={{ ml: 2 }}>
                      <Avatar>
                        <Icon fontSize="lg">link</Icon>
                      </Avatar>
                    </ListItemAvatar>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Contact;
