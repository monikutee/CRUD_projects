import React from "react";
import { Context } from "../contextStore";
import {
  StyledRoot,
  StyledMainButton,
  Text,
  StyledCircularProgress,
  StyledCalculationsField,
  StyledDisplayBox,
  BoxInCircle,
} from "./styled";
import Link from "@mui/material/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import ImageGallery from "react-image-gallery";
import { Navigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Slider from "@mui/material/Slider";
import First from "../assets/1.jpg";
import Second from "../assets/2.jpg";
import Third from "../assets/3.jpg";
import Fourth from "../assets/4.jpg";
import Fifth from "../assets/5.jpg";

const images = [
  {
    original: First,
    thumbnail: First,
    thumbnailWidth: 300,
    originalHeight: 380,
  },
  {
    original: Second,
    thumbnail: Second,
    thumbnailWidth: 300,
    originalHeight: 380,
  },
  {
    original: Third,
    thumbnail: Third,
    thumbnailWidth: 300,
    originalHeight: 380,
  },
  {
    original: Fourth,
    thumbnail: Fourth,
    thumbnailWidth: 300,
    originalHeight: 380,
  },
  {
    original: Fifth,
    thumbnail: Fifth,
    thumbnailWidth: 300,
    originalHeight: 380,
  },
];

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 50000,
    label: "$50000",
  },
];

export const Display: React.FC = () => {
  const { selected } = React.useContext(Context);
  const [invest, setInvest] = React.useState(2000);

  return selected ? (
    <StyledRoot>
      <Link href="/" underline="none">
        <StyledMainButton startIcon={<ArrowBackIcon />}>Back</StyledMainButton>
      </Link>
      <StyledDisplayBox>
        <Box style={{ width: "65%" }}>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </Box>
        <Box
          style={{
            width: "35%",
            backgroundColor: "rgb(220 182 175 / 27%)",
            padding: 20,
            borderRadius: 8,
          }}
        >
          <Text align={"left"} variant="h6">
            {selected.title}
          </Text>
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              margin: "10px 0",
            }}
          >
            <StyledCircularProgress
              variant="determinate"
              value={66}
              size={100}
              thickness={3}
            />
            <BoxInCircle>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Text variant="caption">{`66%`}</Text>
                <Text variant="caption">22 people</Text>
              </Box>
            </BoxInCircle>
          </Box>
          <StyledCalculationsField>
            <Box>
              <Text variant="caption">Collected</Text>
              <Text>$22.000</Text>
            </Box>
            <Box>
              <Text variant="caption">Goal</Text>
              <Text>${selected.loan}</Text>
            </Box>
          </StyledCalculationsField>
          <Divider variant="middle" />
          <StyledCalculationsField>
            <Text>Invest:</Text>
            <TextField
              sx={{
                width: 120,
              }}
              type="number"
              value={invest}
              onChange={(e) => setInvest(+e.target.value)}
              InputProps={{
                inputProps: { min: 0 },
                startAdornment: (
                  <InputAdornment
                    position="start"
                    component="div"
                    style={{ paddingLeft: "-14px" }}
                    disablePointerEvents
                  >
                    $
                  </InputAdornment>
                ),
              }}
            />
          </StyledCalculationsField>
          <Slider
            value={invest}
            step={100}
            onChange={(event: Event, newValue: number | number[]) => {
              setInvest(newValue as number);
            }}
            marks={marks}
            valueLabelDisplay="auto"
            min={0}
            max={50000}
            sx={{ width: "90%" }}
          />
          <Divider variant="middle" />
          <StyledCalculationsField>
            <Box>
              <Text variant="caption">Interest</Text>
              <Text variant="h6">{selected.interest}%</Text>
            </Box>
            <Box>
              <Text variant="caption">Earnings</Text>
              <Text variant="h6">$DAUG</Text>
            </Box>
          </StyledCalculationsField>
          <StyledMainButton fullWidth>Invest</StyledMainButton>
        </Box>
      </StyledDisplayBox>
    </StyledRoot>
  ) : (
    <Navigate to="/" />
  );
};
