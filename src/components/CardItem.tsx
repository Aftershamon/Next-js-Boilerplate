import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 500,
        maxHeight: 500,
        minHeight: "auto",
        marginTop: "20px",
        borderRadius: 5,
      }}
    >
        <CardMedia
          component="img"
          sx={{ height: 400 }}
          image="https://f.ptcdn.info/379/084/000/lwznke79ikK9wumEfFU-o.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            [Pantip Point] เตียงนอนไม่ต้อง! เตรียมนอนดึกดูยูโร 2024!!
          </Typography>
        </CardContent>
    </Card>
  );
}
