import { useNavigate } from "react-router-dom";

// Material UI
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

// En caso de tener una ruta mal, o cualquier error, se redirigira aqui para mostrarlo.
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Card
      className="cardStyle"
      sx={{ width: 320, textAlign: "center", pt: 2, pb: 1, mt: 2 }}
    >
      <CardHeader title="PÁGINA NO ENCONTRADA" sx={{ pb: 0 }} />
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="h2" align="center">
          <strong>
            <span style={{ color: "black" }}>4</span>
            <span style={{ color: "var(--logoColor)" }}>0</span>
            <span style={{ color: "black" }}>4</span>
          </strong>
        </Typography>

        <Button onClick={() => navigate("/")} sx={{ color: "inherit" }}>
          <strong>
            <span style={{ color: "black" }}>IR AL </span>
            <span style={{ color: "var(--logoColor)" }}>INICIO</span>
          </strong>
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotFound;
