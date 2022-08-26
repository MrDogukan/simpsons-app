import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { Container } from "@mui/material";

const SimpsonDetail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(state.name);
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 500, padding: "1rem" }}>
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{
              maxWidth: "150px",
              margin: "auto",
            }}
            component="img"
            src={`${state.avatar.split("/revision")[0]}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              {state.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
            >
              {state.job}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {state.description}
            </Typography>
          </CardContent>
          <Button variant="contained" onClick={() => navigate("/")}>
            Back To List
          </Button>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default SimpsonDetail;
