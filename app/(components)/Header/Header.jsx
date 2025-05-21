"use client";
import { useEffect, useState } from "react";
import { Box, Fab, Grid, Typography } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";
import SocialIcons from "../SocialIcons";
import { color1} from "../Global";
import Loader from "../Loader";
import { color } from "../Global";
import { removeBackslashes, VideosAccess } from "@/lib/fetchData";
import { useSelector } from "react-redux";
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import Image from "next/image";

const Header = () => {
    const HospitalDetails = useSelector(selectHospitalDetails);
    const [open, setOpen] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    // console.log("logo=", `https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_primary)}`)
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 10000); // 10 seconds

        // Cleanup on unmount
        return () => clearTimeout(timer);
    }, []);

    if (!hydrated) return null;
    if (!HospitalDetails) return <Loader />;

    return (
        <>
            {/* Header Top Section */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    backgroundColor: "#ffffff",
                    position: "relative",
                    top: 0,
                    zIndex: 1000,
                    marginY:'5px', 
                    px: { xs: 2, md: 4 },
                    justifyContent: "center",
                    color: "black",
                    marginBottom: { xs: '10px', md: '10px' }
                }}
            // mb={2}
            >
                <Grid container alignItems="center" justifyContent="space-between" spacing={2} width="100%">
                    {/* Logo & Hospital Name */}

                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { xs: "center", md: "center" },
                            gap: 2,
                            // position: 'relative'
                        }}
                    >
                        <Grid item xs={12} sx={{
                            display: { sm: 'flex', md: 'none' },
                            justifyContent: 'space-between',
                            width: '100%',
                            // border: '1px black solid',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            {HospitalDetails.logo_primary == null?<></>:
                            <Grid item xs={5}>
                                <Image
                                    src={`https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_primary)}`}
                                    alt="SCI Logo"
                                    width={100}
                                    height={100}
                                    priority
                                    style={{ objectFit: "contain", width: '100', height: '100', cursor: 'pointer' }}
                                    onClick={() => window.location.href = '/'}
                                />
                            </Grid>}
                            {HospitalDetails.logo_secondary == null?<></>:
                            <Grid item xs={5} position='absolute' top={10} right={0}>
                                <Image
                                    src={`https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_secondary)}`}
                                    alt="ACCF Logo"
                                    width={90}
                                    height={90}
                                    priority
                                    style={{ objectFit: "contain", width: 'auto', height: 'auto', cursor: 'pointer' }}
                                    onClick={() => window.location.href = '/'}
                                />
                            </Grid>}
                        </Grid>

                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}>
                            {HospitalDetails.logo_primary == null?<></>:
                            <Image
                                src={`https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_primary)}`}
                                alt="ACCF Logo"
                                width={100}
                                height={100}
                                priority
                                style={{ objectFit: "contain", width: '100px', height: '100px', cursor: 'pointer' }}
                                onClick={() => window.location.href = '/'}
                            />}
                        </Box>
                        <Box textAlign={{ xs: "center", md: "left" }}>
                            <Typography variant="h6" fontWeight="bold">
                                {HospitalDetails.aname}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#bf1e2e",
                                    fontWeight: "bold",
                                    fontSize: { xs: "24px", sm: "18px", md: "20px" },
                                }}
                            >
                                {HospitalDetails?.name || "Hospital Name"}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#bf1e2e", fontSize: { xs: "12px", sm: "14px" } }}>
                                A Unit Of Assam Cancer Care Foundation
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                        }}>
                            {HospitalDetails.logo_secondary == null?<></>:
                            <Image
                                src={`https://accf-api.cancercareinstituteguwahati.org/storage/${removeBackslashes(HospitalDetails.logo_secondary)}`}
                                alt="ACCF Logo"
                                width={100}
                                height={100}
                                priority
                                style={{ objectFit: "contain", width: '100px', height: '100px', cursor: 'pointer' }}
                                onClick={() => window.location.href = '/'}
                            />}
                        </Box>
                    </Grid>

                    {/* Contact Info and Social Icons */}
                    <Grid item xs={12} md={5} sx={{ textAlign: { xs: "center", md: "right" } }}>
                        <Typography
                            variant="h6"
                            component="a"
                            href="tel:18003454325"
                            sx={{
                                fontWeight: 800,
                                color: color1,
                                fontSize: { xs: "14px", sm: "16px", md: "14px" },
                                textDecoration: "none",
                                cursor: "pointer",
                            }}
                        >
                            FOR QUERY & APPOINTMENT, CALL 18003454325
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "10px",
                                justifyContent: { xs: "center", md: "flex-end" },
                                mt: 1,
                            }}
                        >
                            <SocialIcons/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Sticky Navbar */}
            <Box
                sx={{
                    width: "100%",
                    position: "sticky",
                    top: 0,
                    zIndex: 5,
                    backgroundColor: "white",
                    // height:'120px'
                }}
            >
                <Navbar Title={HospitalDetails?.name}/>
                <Box style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'absolute' }}>
                    <hr style={{ borderTop: "1px solid lightgray", display: 'flex', width: '100%' }} />
                </Box>
            </Box>
            {/* {VideosAccess?<Box display="flex" width="100%" justifyContent="center">
                <LatestEvent open={open} handleClose={() => setOpen(false)} setOpen={setOpen}/>
            </Box>:<></>} */}


            {/* Scroll to Top FAB */}
            <Fab
                aria-label="scroll-top"
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                    backgroundColor: color,
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: "#333",
                    },
                }}
                onClick={handleScrollToTop}
            >
                <KeyboardArrowUp />
            </Fab>
        </>
    );
};

export default Header;
