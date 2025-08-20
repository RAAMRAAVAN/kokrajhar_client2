import { selectFacilities } from "@/redux/features/facilitiesSlice";
import React from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography, Link, useTheme, useMediaQuery, Paper } from "@mui/material";

const Facility2 = () => {
  const facility = useSelector(selectFacilities);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width="100%" display="flex" flexDirection={isMobile ? "column" : "row"}>
      <Box
        sx={{
        //   width: isMobile ? "100%" : "33.33%",
          p: isMobile ? 2 : 4,
          background: "rgb(237, 224, 197)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant={isMobile ? "h6" : "h5"} fontWeight={600} pb={1}>
          Featured care Areas
        </Typography>
        <Typography variant="body1" mt={1}>
          We solve the world most serious and comples medical challanges
        </Typography>
      </Box>
      <Grid
        container
        className="care-areas"
        sx={{
        //   width: isMobile ? "100%" : "66.66%",
          p: isMobile ? 2 : 4,
          background: "#93c6da4f",
        }}
        spacing={isMobile ? 2 : 0}
      >
        {facility.map((fac) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={fac.id}
            sx={{
              boxSizing: "border-box",
              pr: isMobile ? 0 : 4,
            }}
          >
            <Link
              href={`/facilities?expand=true#${fac.id}`}
              underline="none"
              sx={{
                color: "rgb(7, 115, 216)",
                display: "block",
                borderTop: "1px solid #0005",
                py: 2.5,
              }}
              className="care-area-link"
            >
              <Box
                className="care-area-content"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>{fac.name}</Typography>
                <Typography>&#9654;</Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Facility2;
