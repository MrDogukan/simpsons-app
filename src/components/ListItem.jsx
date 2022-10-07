import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SimpsonsContext from "../context/SimpsonsContext";

const ListItem = ({ simpson, index }) => {
  const navigate = useNavigate();
  const { simpsons, setSimpsons } = useContext(SimpsonsContext);
  const trash = () => {
    setSimpsons(simpsons.filter((e) => e.id !== simpson.id));
  };

  const upItem = () => {
    if (simpsons.indexOf(simpson) === 0) {
      return;
    } else {
      let oldIndex = simpsons.indexOf(simpson);

      simpsons.splice(oldIndex, 1);

      simpsons.splice(oldIndex - 1, 0, simpson);
      let newSimpsons = [];
      setSimpsons(newSimpsons.concat(simpsons));
      console.log(newSimpsons);
    }
  };

  const downItem = () => {
    if (simpsons.indexOf(simpson) === simpsons.length - 1) {
      return;
    } else {
      let oldIndex = simpsons.indexOf(simpson);

      simpsons.splice(oldIndex, 1);

      simpsons.splice(oldIndex + 1, 0, simpson);
      let newSimpsons = [];
      setSimpsons(newSimpsons.concat(simpsons));
      console.log(newSimpsons);
    }
  };

  return (
    <TableContainer sx={{ maxWidth: 650, margin: "auto" }} component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          <TableRow
            sx={{
              width: "100%",
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell
              sx={{ width: "10%" }}
              align="center"
              component="th"
              scope="row"
            >
              {index + 1}
            </TableCell>
            <TableCell sx={{ width: "20%", padding: "2px" }} align="center">
              <img
                className="list-item-img"
                src={
                  simpson.avatar.split("/revision")[0]
                    ? simpson.avatar.split("/revision")[0]
                    : "images/Simpson.png"
                }
                alt={simpson.id}
              ></img>
            </TableCell>
            <TableCell
              sx={{ cursor: "pointer", width: "40%", paddingLeft: "5px" }}
              onClick={() =>
                navigate(`/details/${simpson.id}`, { state: simpson })
              }
            >
              {simpson.name}
            </TableCell>
            <TableCell sx={{ width: "10%" }} align="center">
              <ArrowCircleUpIcon
                sx={{ cursor: "pointer" }}
                color="success"
                onClick={upItem}
              />
            </TableCell>
            <TableCell sx={{ width: "10%" }} align="center">
              <ArrowCircleDownIcon
                sx={{ cursor: "pointer" }}
                color="error"
                onClick={downItem}
              />
            </TableCell>
            <TableCell sx={{ width: "10%" }} align="center">
              <DeleteOutlineIcon sx={{ cursor: "pointer" }} onClick={trash} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListItem;
