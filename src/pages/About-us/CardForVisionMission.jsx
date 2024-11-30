import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardForVissionMission() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-5 md:px-10 lg:mx-10">
      <Card
        data-aos="fade-up"
        data-aos-duration="400"
        className="p-6 flex-1"
      >
        <CardContent>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h5"
            component="div"
            className="text-center md:text-left"
          >
            Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary" }}
            className="mt-2 text-center md:text-left"
          >
            Our vision is to empower businesses by providing them with
            cutting-edge web solutions that drive success and enhance user
            experience.
          </Typography>
        </CardContent>
      </Card>
      <Card
        data-aos="fade-up"
        data-aos-duration="800"
        className="p-6 flex-1"
      >
        <CardContent>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h5"
            component="div"
            className="text-center md:text-left"
          >
            Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary" }}
            className="mt-2 text-center md:text-left"
          >
            Our mission is to be a trusted partner in digital transformation,
            bringing your ideas to life with innovative solutions.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
