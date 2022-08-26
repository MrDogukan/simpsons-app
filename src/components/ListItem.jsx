import React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ListItem = ({ simpson, index }) => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell>
              <img
                className="list-item-img"
                src={simpson.avatar.split("/revision")[0]}
                alt={simpson.id}
              ></img>
            </TableCell>
            <TableCell
              sx={{ cursor: "pointer" }}
              align="right"
              onClick={() =>
                navigate(`/details/${simpson.id}`, { state: simpson })
              }
            >
              {simpson.name}
            </TableCell>
            <TableCell align="right">
              <ArrowCircleUpIcon />
            </TableCell>
            <TableCell align="right">
              <ArrowCircleDownIcon />
            </TableCell>
            <TableCell align="right">
              <DeleteOutlineIcon />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListItem;
