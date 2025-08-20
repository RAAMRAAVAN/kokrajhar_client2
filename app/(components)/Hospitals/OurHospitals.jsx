"use client";
import { selectHospitals } from "@/redux/features/hospitalSlice";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";

const OurHospitals2 = () => {
  const ourHospitals = useSelector(selectHospitals) || [];
  
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 2, md: 4 }, background: "transparent" }}>
      
   
      <Grid container spacing={3}>
        {ourHospitals.map((hospital) => (
          <Grid
            key={hospital.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                width: "100%",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                position: "relative",
                background: "#fff",
                cursor: "pointer",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 4px 24px rgba(25, 118, 210, 0.15)",
                },
                minHeight: 260,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <a
                href={hospital.location}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", height: "100%", display: "block" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 160,
                    background: "#e3e3e3",
                    backgroundImage: hospital.about_bg
                      ? `url(https://accf-api.cancercareinstituteguwahati.org/storage/${hospital.about_bg})`
                      : "url(/hospital-placeholder.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box sx={{ p: 2, background: "rgba(86, 79, 79, 0.86)", position: "absolute", bottom: 0, left: 0, right: 0 }}>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color="#fff"
                  >
                    {hospital.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#fff"
                  >
                    {hospital.city || hospital.address || ""}
                  </Typography>
                </Box>
              </a>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurHospitals2;
