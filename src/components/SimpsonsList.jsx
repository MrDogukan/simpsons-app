import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import SimpsonsContext from "../context/SimpsonsContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";

const SimpsonsList = () => {
  const { simpsons, getSimpsons } = useContext(SimpsonsContext);
  const navigate = useNavigate();
  // console.log(simpsons);

  return (
    <Box textAlign={"center"}>
      <Typography margin={"20px"} variant="h3" align="center">
        Simpsons List
      </Typography>
      {simpsons.length === 0 ? (
        <Button onClick={getSimpsons} variant="contained">
          Get The List
        </Button>
      ) : (
        simpsons.map((simpson, index) => {
          return <ListItem simpson={simpson} index={index} key={simpson.id} />;
        })
      )}

      <Avatar
        sx={{ marginY: "3rem", marginX: "auto", cursor: "pointer" }}
        onClick={() => navigate("/add")}
      >
        <AddCircleIcon fontSize="large" />
      </Avatar>
    </Box>
  );
};

export default SimpsonsList;
