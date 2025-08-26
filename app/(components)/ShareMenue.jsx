import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogContent,
  useMediaQuery,
  Box,
  Typography,
} from "@mui/material";
import { ShareOutlined, Close as CloseIcon } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTheme } from "@mui/material/styles";
import { StaticHospital } from "@/lib/fetchData";

export default function ShareModalButton({ id }) {
  const hospital = StaticHospital();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const shareUrl = hospital.domain + "consultants/doctor_details?id=" + id;
  // const shareUrl = "http://localhost:3000/"+"consultants/doctor_details?id=" + id;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    handleClose();
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent("Check out this doctor's profile:");

  const shareOptions = [
    {
      label: "Copy Link",
      icon: <ContentCopyIcon fontSize="large" />,
      action: handleCopy,
    },
    {
      label: "WhatsApp",
      icon: <WhatsAppIcon fontSize="large" style={{ color: "#25D366" }} />,
      link: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      icon: <LinkedInIcon fontSize="large" style={{ color: "#0077B5" }} />,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Email",
      icon: <EmailIcon fontSize="large" style={{ color: "#D44638" }} />,
      link: `mailto:?subject=${encodeURIComponent(
        "Doctor Profile"
      )}&body=${encodedText}%20${encodedUrl}`,
    },
    {
      label: "Twitter",
      icon: <TwitterIcon fontSize="large" style={{ color: "#1DA1F2" }} />,
      link: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      label: "Facebook",
      icon: <FacebookIcon fontSize="large" style={{ color: "#1877F2" }} />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  return (
    <>
      <IconButton
        disableRipple
        onClick={handleOpen}
        sx={{
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "transparent" },
          "&:active": { backgroundColor: "transparent" },
        }}
      >
        <ShareOutlined style={{ color: "gray" }} />
      </IconButton>

      <Dialog
        fullScreen={isMobile}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            paddingX: isMobile ? "20px" : "50px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
            // backgroundColor:'red',
            height: "150px",
            paddingY: 2,
            borderRadius: "20px",
          },
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            // mb: 3,
            mt: isMobile ? 2 : 2,
            color: "#404040",
            textAlign: "center",
          }}
        >
          Share Profile Via
        </Typography>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "row", // always horizontal
            // flexWrap: "wrap", // wrap on smaller screens
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            // marginBottom:'20px',
            width: "100%",
            // height:"20px",
            // border:'1px red solid',
          }}
        >
          {shareOptions.map((option, index) => (
            <Box
              key={index}
              onClick={() =>
                option.link
                  ? window.open(option.link, "_blank")
                  : option.action && option.action()
              }
              sx={{
                cursor: "pointer",
                textAlign: "center",

                // minWidth: 60, // keeps icons spaced evenly
                "&:hover": { opacity: 0.8 },
              }}
            >
              {option.icon}
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}
