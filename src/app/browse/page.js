'use client';

import { useLoadScript } from "@react-google-maps/api";
import Map from '../components/map.jsx';
import LogSignButtons from '../components/log_sign_buttons.jsx';
import Sidebar from '../components/sidebar.jsx';
import AddBathroomButton from '../components/add_button.jsx';
import Box from '@mui/material/Box';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';

export default function Browse() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        libraries: ['places']
    });

    if (!isLoaded) 
        return <div>Loading...</div>;
    return (
        <Box sx={{ height: '100vh', width: '100%' }}> 
            <Sidebar />
            <LogSignButtons />
            <AddBathroomButton />
            <Map />
        </Box>
    );
}

