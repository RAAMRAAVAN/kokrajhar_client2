'use client'
import { Box, Typography } from "@mui/material";
import { Suspense, lazy, useEffect, useState } from "react";
import Loader from "../(components)/Loader";
import { FetchUpdates, UpdatesAccess, VideosAccess } from "@/lib/fetchData";
import DoctorSlider from '../(components)/DoctorCard/DoctorSlider';
import ScrollReveal from "../(components)/Animation/ScrollReveal";
import { Element } from 'react-scroll';
import { selectHospitalDetails } from "@/redux/features/hospitalDetailSlice";

const ImageSliderMain = lazy(() => import("../(components)/HomeImageSlider/ImageSliderMain"));
// const DoctorSlider = lazy(() => import("../(components)/DoctorCard/DoctorSlider"));
const Facilities = lazy(() => import("../(components)/Facilities/FacilityData"));
const AccomplishmentsMain = lazy(() => import("../(components)/Accomplishments/AccomplichmentsMain"));
const WhatsHappening = lazy(() => import("../(components)/WhatsHappening"));
const OurHospitals = lazy(() => import("../(components)/Hospitals/OurHospitalsPage"));
const VideoGrid = lazy(() => import("../(components)/Videos/VideoGrid"));
const Partners = lazy(() => import("../(components)/Partners/Partners"));
import TextCarousel from "../(components)/TextCarousel";
import ScrollNav from "../(components)/ScrollNav";
import { useSelector } from "react-redux";
import { LatestVideos2 } from "../../lib/fetchData";
import SearchDoctors from "../(components)/DoctorCard/SearchDoctors";
import { selectDoctors } from "@/redux/features/doctorSlice";

// ✅ Server Component
const Home = () => {
  // const homeContent = HomeContent;
  const doctors = useSelector(selectDoctors);
  const HospitalDetails = useSelector(selectHospitalDetails);

  const [LatestVideosData, setVideos] = useState([]);
  const [updates, setUpdates] = useState([]);

  const fetchVideos = async () => {
    // console.log("fetch videos")
    setVideos(await LatestVideos2())
  }

  const fetchUpdates = async () => {
    // console.log("fetch videos")
    setUpdates(await FetchUpdates())
  }
  useEffect(() => {
    fetchVideos();
    fetchUpdates();
  }, [])

  return (
    <>

      {updates.length > 0 ? <TextCarousel updates={updates} /> : <></>}
      <ScrollNav />
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        boxShadow="5px 5px 15px rgba(0, 0, 0, 0.3)"
        marginBottom={3}
        sx={{ backgroundColor: '#f6f6f6', color: 'black' }}
        // fontFamily='fantasy'
      >
      </Box>
    </>
  );
}
export default Home;