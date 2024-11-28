import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardForVissionMission() {
  return (
    <div className="flex gap-10 p-5 px-10 mb-5 md:mx-0 lg:mx-10">
      <Card
        data-aos="fade-up"
         data-aos-duration="600"
        className="p-6 flex-1">
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }} variant="h5" component="div">
            Vision
          </Typography>
          <Typography variant="h8" sx={{ color: "text.secondary" }}>
            Our vision is to empower businesses by providing them with
            cutting-edge web solutions that drive success and enhance user
            experience.
          </Typography>
        </CardContent>
      </Card>
      <Card 
        data-aos="fade-up" 
         data-aos-duration="600"
        className="p-6 flex-1">
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }} variant="h5" component="div">
            Mission
          </Typography>
          <Typography variant="h8" sx={{ color: "text.secondary" }}>
            Our mission is to be a trusted partner in digital transformation,
            bringing your ideas to life with innovative solutions.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
