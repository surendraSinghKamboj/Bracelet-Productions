import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TestimonialPic from "../assets/Testimonial.png";
import { Box } from "@mui/material";

export default function ImgMediaCard() {
  return (
    <Card
      className="card"
      sx={{
        maxWidth: 345,
        background: "#333",
      }}
    >
      <Box className="layer"></Box>
      <Box
        className="card-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography
            className="card-text"
            variant="body2"
            sx={{
              textAlign: "center",
              color: "white",
              fontFamily: `"Poppins", "sans-serif"`,
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "18px",
                lg: "20px",
              },
            }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{
            height: "120px",
            width: "120px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid white",
          }}
          src={TestimonialPic}
        />
        <CardContent>
          <Typography
            gutterBottom
            className="card-text"
            variant="h4"
            component="div"
            sx={{
              textAlign: "center",
              color: "#FFC300",
              fontFamily: `"Poppins", "sans-serif"`,
              fontFamily: `"Righteous", "cursive"`,
            }}
          >
            Person Name
          </Typography>
          <Typography
            className="card-text"
            gutterBottom
            component="div"
            sx={{
              color: "#6CCFF6",
              textAlign: "center",
              fontFamily: `"Poppins", "sans-serif"`,
              fontFamily: `"Righteous", "cursive"`,
              fontSize: "28px",
            }}
          >
            Company
          </Typography>
        </CardContent>
      </Box>

      {/*  <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
