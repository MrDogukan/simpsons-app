import { Avatar, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import SimpsonsContext from "../context/SimpsonsContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";

const SimpsonsList = () => {
  const { simpsons } = useContext(SimpsonsContext);
  const navigate = useNavigate();
  // console.log(simpsons);

  return (
    <Box>
      <Typography margin={"20px"} variant="h3" align="center">
        Simpsons List
      </Typography>
      {simpsons.map((simpson, index) => {
        return <ListItem simpson={simpson} index={index} key={simpson.id} />;
      })}
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
