"use client";
import { useEffect, useState } from "react";
import {
  AppBar, Box, Toolbar, IconButton, Typography, Button,
  Grid
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactUsDropdown from './ContactUsDropdown';
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { HomePageAccess, AboutUsAccess, FacilitiesAccess, HospitalsAccess, NewsAndEventsAccess, ContactUsAccess, SocialInfraAccess, AcademicsAccess, removeBackslashes } from "@/lib/fetchData";
import { useSelector } from "react-redux";
import { Bold, NavBackground, NavElements } from '../Global';
import MobileView from './MobileView';
import { selectHospitals } from "@/redux/features/hospitalSlice";
import { selectFacilities } from "@/redux/features/facilitiesSlice";
import FacilitiesDropdown from './FacilitiesDropDown';
import HospitalsDropdown from './HospitalsDropDown';
import Image from "next/image";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { Mail } from "@mui/icons-material";
const navItems = [
  { name: "Home", link: "/", Active: HomePageAccess },
  { name: "About Us", link: "/about_us", Active: AboutUsAccess },
  // { name: "Doctors", link: "/consultants", Active: AboutUsAccess },
  { name: "Facilities", link: "/facilities", Active: FacilitiesAccess },
  { name: "Hospitals", link: "/", Active: HospitalsAccess },
  { name: "News & Events", link: "/news", Active: NewsAndEventsAccess },
  { name: "Academics", link: "/academics", Active: AcademicsAccess },
  { name: "Contact Us", link: "/contact", Active: ContactUsAccess },
];

export default function Navbar({ setMobileOpen, mobileOpen }) {
  const [hydrated, setHydrated] = useState(false);
  const OurHospitals = useSelector(selectHospitals)
  const HospitalDetails = useSelector(selectHospitalDetails);
  const Facilities = useSelector(selectFacilities);
  // const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null); // separate for facilities
  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleHospitalsClick = (event) => setAnchorEl(event.currentTarget);
  const handleFacilitiesClick = (event) => setAnchorE2(event.currentTarget);

  const handleHospitalsClose = () => setAnchorEl(null);
  const handleFacilitiesClose = () => setAnchorE2(null);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar elevation={0} position="static" style={{ zIndex: 10, backgroundColor: NavBackground, color: 'black' }}>
        <Toolbar sx={{ display: "flex",  alignItems: "center", position: 'relative', zIndex: 6, minHeight: { xs: '56px !important', md: '38px !important' } }} boxshadow={0}>
          <Box sx={{ display: { xs: "flex", md: "none" }}} width='60%' justifyContent='space-between'>
            <Box sx={{ display: { xs: "flex", md: "none" }, width:'50%',mr: 1 }}>
              <Image src={`https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_primary)}`} alt="logo" width={43} height={45} />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, width:'50%',alignItems:'end', marginBottom:1, justifyContent:'end' }}>
              <Image src={`https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_secondary)}`} alt="logo" width={45} height={40} style={{display:'flex', height:'40px'}}/>
            </Box>
          </Box>
          <Typography sx={{ display: { xs: "none", md: "none" }, fontSize: "1rem", fontWeight: "bold", color: 'black', width: '100%', textAlign: 'center' }}>
            {HospitalDetails?.name || "Hospital Name"}
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1, width:'40%', alignItems:'end', justifyContent:'end'}}>
            <Box display='flex' marginX={1} flexDirection='column' alignItems='center' component="a"
              href={`https://wa.me/${HospitalDetails.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"><IoIosMail size={24} color="gray" /><Typography fontSize={12} fontWeight='bold' color="gray">Mail</Typography></Box>
            <Box display='flex' marginX={1} flexDirection='column' alignItems='center' component="a"
              href={`tel:${HospitalDetails.phone || ""}`}><IoIosCall size={24} color="gray" /><Typography fontSize={12} fontWeight='bold' color="gray">Toll Free</Typography></Box>
            {/* <Box display='flex' marginX={1} flexDirection='column' alignItems='center'><IoIosCall size={24} color="gray" /><Typography fontSize={12} fontWeight='bold' color="gray">Call</Typography></Box> */}
          </Box>
          <Grid container sx={{ width: '100%', display: { md: 'flex', lg: 'flex', xl: 'flex', sm: 'none', xs: 'none' } }}>
            <Grid item lg={8} md={4} sm={4} xs={2} display='flex' >
              <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
                {navItems.map((item) => {
                  if (item.Active)
                    switch (item.name) {
                      case "Hospitals":
                        return (
                          <Box key={item.name}>
                            <HospitalsDropdown item={item} Hospitals={OurHospitals} />
                          </Box>
                        );
                      case "Facilities":
                        return (
                          <Box key={item.name}>
                            <FacilitiesDropdown item={item} Facilities={Facilities} />
                          </Box>
                        );
                      case "Contact Us":
                        return <ContactUsDropdown key={item.name} />;
                      default:
                        return (
                          <Link key={item.name} href={item.link} passHref legacyBehavior>
                            <Button sx={{ color: NavElements, fontWeight: Bold ? 'bold' : none }}>{item.name}</Button>
                          </Link>
                        );
                    }
                })}
              </Box>
            </Grid>
            <Grid item lg={4} md={8} sm={8} xs={10} sx={{ display: 'flex', width: '100%' }}>
            </Grid>
          </Grid>

          {/* <IconButton edge="end" sx={{ display: { xs: "block", lg: "none" }, color: "#fff", position: 'absolute' }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton> */}
        </Toolbar>

        <MobileView mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} OurHospitals={OurHospitals} />

      </AppBar>
    </motion.div>
  );
}
