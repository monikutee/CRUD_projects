import React from "react";
import { Context } from "../contextStore";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import {
  Text,
  StyledRoot,
  StyledHeaderBox,
  StyledTableCell,
  StyledTableRow,
  StyledMainButton,
} from "./styled";
import { updateProjects } from "../services/projectsAPI";
import { Project } from "../types";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const Home: React.FC = () => {
  const { projects, setProjects, setSelected } = React.useContext(Context);
  const navigate = useNavigate();

  const handleDelete = (project: Project) => {
    const findIndex = projects.findIndex((el) => el.title === project.title);
    if (findIndex !== -1) {
      projects.splice(findIndex, 1);
    }
    updateProjects(projects);
    setProjects([...projects]);
  };

  const handleEdit = (project: Project) => {
    setSelected(project);
    navigate("/edit");
  };

  const handleDisplay = (project: Project) => {
    setSelected(project);
    navigate("/display");
  };

  return (
    <StyledRoot>
      <StyledHeaderBox>
        <Text variant="h6">Projects</Text>
        <Link href="/add" underline="none">
          <StyledMainButton variant="contained">Create new</StyledMainButton>
        </Link>
      </StyledHeaderBox>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>State</StyledTableCell>
              <StyledTableCell>Loan</StyledTableCell>
              <StyledTableCell>Interest</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((row) => (
              <StyledTableRow key={row.title}>
                <StyledTableCell scope="row">{row.title}</StyledTableCell>
                <StyledTableCell>{row.type}</StyledTableCell>
                <StyledTableCell>{row.state}</StyledTableCell>
                <StyledTableCell>{row.loan}</StyledTableCell>
                <StyledTableCell>{row.interest}</StyledTableCell>
                <StyledTableCell
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleDelete(row)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    size="small"
                    onClick={() => handleEdit(row)}
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    size="small"
                    onClick={() => handleDisplay(row)}
                  >
                    <VisibilityIcon fontSize="inherit" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledRoot>
  );
};
