import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export const StyledRoot = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  gap: "10px",
}));

export const StyledHeaderBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  margin: "10px 0",
}));

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ffcaec6e",
    color: "#FF65C9",
    "&:nth-last-of-type(2)": {
      color: "#101ec7",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  textAlign: "center",
  "&:first-of-type ": {
    textAlign: "left",
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child": {
    border: 0,
  },
}));

export const StyledButtonBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "20px",
  alignItems: "center",
  width: "100%",
  margin: "10px 0",
}));

export const StyledMainButton = styled(Button)`
  border-radius: 30px;
  background-color: #c4017a;
  min-width: 100px;
  color: white;
  :hover {
    background-color: #c4017a;
  }
`;

export const StyledSimpleButton = styled(Button)`
  border-radius: 30px;
  background-color: #e8e8e8;
  color: #bb5795;
  min-width: 100px;
  :hover {
    background-color: #e8e8e8;
  }
`;

export const Text = styled(Typography)`
  color: #23194c;
`;

export const StyledCircularProgress = styled(CircularProgress)(() => ({
  borderRadius: "100%",
  boxShadow: "inset 0 0 0px 7px #d3bc9b",
  backgroundColor: "transparent",
  color: "#FF65C9",
}));

export const StyledCalculationsField = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  margin: "10px 0",
}));

export const StyledDisplayBox = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "white",
  borderRadius: 8,
  display: "flex",
  padding: 20,
  gap: 10,
}));

export const BoxInCircle = styled(Box)(() => ({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
