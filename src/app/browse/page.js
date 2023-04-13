'use client';

import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import MUIButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

export const ButtonBox = styled(Box)({
    marginX: '10px',
    marginY: '5px',
    padding: '5px'
});

export const Button = styled(MUIButton)({
    textTransform: 'capitalize',
});

function LogSignButtons() {
    const loginText = "Log In";
    const signupText = "Sign Up";

    return (
        <Box sx = {{ display: 'flex', justifyContent: 'flex-end', zIndex: 'tooltip', background: transparent }} >
            <ButtonBox>
                <Button variant="contained">{loginText}</Button>
            </ButtonBox>
            <ButtonBox>
                <Button variant="contained">{signupText}</Button>
            </ButtonBox>
        </Box>
    );
}

export default function Browse() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyChXfJ4hhbLu-8k7JDP3H9BojfpR9SvArc",
    });

    if (!isLoaded) 
        return <div>Loading...</div>;
    return (
        <>
            <LogSignButtons />    
            <Map />
        </>
    );
}

function Map() {
    // Sets the center at College Ave
    const center = useMemo(() => ({ lat: 40.50098, lng: -74.44740 }), []);
    // Might want to move below line to CSS later
    const containerStyle = { width: '100%', height: '100%' };

    return (
        <GoogleMap 
            zoom={15} 
            center={center} 
            mapContainerStyle={containerStyle}
        >

        /* Child components like markers will go in here later */
        <></>

        </GoogleMap>
    );
}
