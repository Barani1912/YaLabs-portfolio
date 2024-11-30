import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const IndustriesWeServe = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            my: 3,
            mx: 8,
            width: 333,
            height: 80,
          },
        }}
      >
        <Paper data-aos="fade-up" className="flex items-center " elevation={3}>
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/250771/ecommerce.svg"
            alt="ecommerce logo"
          />
          <span >Ecommerce</span>
        </Paper>
        <Paper data-aos="fade-up" className="flex items-center" elevation={3}>
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/443633/education-cap.svg"
            alt="ecommerce logo"
          />
          <span>Education</span>
        </Paper>
        <Paper data-aos="fade-up" className="flex items-center" elevation={3}>
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/214460/health-care-accident.svg"
            alt="ecommerce logo"
          />
          <span>Healthcare</span>
        </Paper>

        <Paper
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/25989/real-estate.svg"
            alt="ecommerce logo"
          />
          <span>Real Estate</span>
        </Paper>
        <Paper
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/417170/travel-holiday-vacation-28.svg"
            alt="ecommerce logo"
          />
          <span>Travel and Hospitality</span>
        </Paper>
        <Paper
          data-aos="fade-up"
          data-aos-duration="600"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-9"
            src="https://cdn-icons-png.flaticon.com/512/11779/11779191.png"
            alt="ecommerce logo"
          />
          <span>Personal Branding</span>
        </Paper>

        <Paper
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/501826/shop.svg"
            alt="ecommerce logo"
          />
          <span>Small Business</span>
        </Paper>
        <Paper
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-9"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/ngo-7506265-6246298.png?f=webp&w=256"
            alt="ecommerce logo"
          />
          <span>NGOs</span>
        </Paper>
        <Paper
          data-aos="fade-up"
          data-aos-duration="800"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-7 lg:mx-10"
            src="https://www.svgrepo.com/show/501835/tv.svg"
            alt="ecommerce logo"
          />
          <span> Entertainment</span>
        </Paper>

        <Paper
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/341462/technology-digital-transformation-machinery-engineering-industry.svg"
            alt="ecommerce logo"
          />
          <span>Technology</span>
        </Paper>
        <Paper
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex items-center"
          elevation={3}
        >
          <img
            className="w-12 mx-9"
            src="https://www.svgrepo.com/show/291508/technology-idea.svg"
            alt="ecommerce logo"
          />
          <span>Creative Agencies</span>
        </Paper>
      </Box>
    </div>
  );
};

export default IndustriesWeServe;
