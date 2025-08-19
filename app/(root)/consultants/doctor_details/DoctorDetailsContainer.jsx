'use client';
import { Box } from "@mui/material";
import Overview from "./Overview";
import { useSelector } from "react-redux";
import { selectDoctorID } from "@/redux/features/doctorSlice";
import Loader from "@/app/(components)/Loader";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function DoctorDetailsContent() {
  const doctorID = useSelector(selectDoctorID);
  const searchParams = useSearchParams();
  const DID = searchParams.get("id");
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [doctorData, setDoctorData] = useState(null);

  const getDoctorDetails = async () => {
    try {
      const response = await fetch(
        `https://accf-api.cancercareinstituteguwahati.org/api/get-doctor/${DID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          next: { revalidate: 900 },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch doctor details");
      const data = await response.json();
      return data || null;
    } catch (error) {
      console.error("Failed to fetch doctor:", error);
      return null;
    }
  };

  useEffect(() => {
    if (!DID) {
      router.replace("/");
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const data = await getDoctorDetails();
      if (!data) {
        router.replace("/");
        return;
      }
      setDoctorData(data);
      setLoading(false);
    };

    fetchData();
  }, [DID, router]);

  if (loading) return <Loader />;

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Overview doctorData={doctorData} />
    </Box>
  );
}
