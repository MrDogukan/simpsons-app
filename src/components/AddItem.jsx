import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { margin } from "@mui/system";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SimpsonsContext from "../context/SimpsonsContext";

const AddItem = () => {
  const { simpsons, setSimpsons } = useContext(SimpsonsContext);
  const [avatar, setAvatar] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  return (
    <Container
      sx={{ padding: "2rem", display: "flex", flexDirection: "column" }}
    >
      <Box>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back To List
        </Button>
        <Typography variant="h4" align="center">
          Add New Character
        </Typography>
      </Box>

      <TextField
        label="Name Surname"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Job Title"
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <TextField
        label="About Him / Her"
        type="text"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Image Link"
        type="text"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add Character
      </Button>
    </Container>
  );
};

export default AddItem;
