import { selectFacilities } from "@/redux/features/facilitiesSlice";
import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Link, useTheme, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const Facility2 = () => {
  const facility = useSelector(selectFacilities);
  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Sort alphabetically
  const sortedfacility = [...facility].sort((a, b) => a.name.localeCompare(b.name));
  // Split into two columns
  const mid = Math.ceil(sortedfacility.length / 2);
  const leftColumn = sortedfacility.slice(0, mid);
  const rightColumn = sortedfacility.slice(mid);

  return (
    <Box width="100%" display="flex" flexDirection={isMobile ? "column" : "row"}>
      <Box
        sx={{
          width: isMobile ? "100%" : "33.33%",
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
          We solve the world most serious and complex medical challanges
        </Typography>
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "66.66%",
          p: isMobile ? 2 : 4,
          background: "#e3f2fd",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 0 : 4,
        }}
      >
        {[leftColumn, rightColumn].map((column, idx) => (
          <Box key={idx} sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {column.map((fac) => (
              <Box
                key={fac.id}
                sx={{
                  borderBottom: "1px solid #b0bec5",
                  py: 2.5,
                  px: 2,
                  background: "#e3f2fd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "background 0.2s",
                  "&:hover": { background: "#bbdefb" },
                }}
              >
                <Box
                  // href={`/facilities?expand=true#${fac.id}`}
                  // onClick={() => router.push(`/facilities?expand=true#${fac.id}`)}
                  onClick={() => router.push(`/facilities?expand=true#${fac.id}`)}
                  underline="none"
                  sx={{
                    color: "rgb(7, 115, 216)",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    flex: 1,
                    cursor:'pointer'
                  }}
                  className="care-area-link"
                >
                  {fac.name}
                </Box>
                <Typography sx={{ color: "rgb(7, 115, 216)", fontSize: "1.3rem", ml: 2 }}>
                  &#9654;
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Facility2;
