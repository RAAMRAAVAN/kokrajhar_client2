'use client'
import { setDoctors } from "@/redux/features/doctorSlice";
import { setFacilities } from "@/redux/features/facilitiesSlice";
import { setHospitalDetails } from "@/redux/features/hospitalDetailSlice";
import { setHospitals } from "@/redux/features/hospitalSlice";
import { setNewses } from "@/redux/features/newsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const APICalls = (props) => {
    const dispatch = useDispatch();
    const {Facilities} = props;
    useEffect(() => {
        if (Facilities?.length) {
            dispatch(setFacilities(Facilities)); // Store doctors in Redux
          }
        
        // console.log("Setting Data");
        // dispatch(setHospitalDetails(HospitalDetails));
      }, []);
    return(<></>);
}
export default APICalls;