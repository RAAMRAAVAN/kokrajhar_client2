import { selectHospitalDetails } from '@/redux/features/hospitalDetailSlice';
import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

const Acredetions  = () => {
  const HospitalDetails = useSelector(selectHospitalDetails);
    

   return (
    
    <Box display="flex" justifyContent="center">
        <Box width="90%" gap={4} marginY={4} justifyContent="center" alignItems="center" display="flex" flexDirection="row"  >                    
          
          <Box justifyContent="center" alignItems="center" display="flex" flexDirection="column" gap={1} >
            <Image
              src={'./logo-nabh.png'}
              alt="ACCF Logo"
              width={200}
              height={200}
              priority
            /> 
            <h1> NABH Accreditation</h1>
            <h2>Certificate No : PESHCO-2026-12317</h2>
            <h2>Validity: From 02/06/2026 to 01/06/2028</h2>
          </Box>

           
        </Box>
    </Box>
  );
}
export default Acredetions;