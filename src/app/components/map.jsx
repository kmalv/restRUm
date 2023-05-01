'use client';
import { useMemo } from "react";
import { GoogleMap } from "@react-google-maps/api";

export default function Map() {
    // Sets the center at College Ave
    const center = useMemo(() => ({ lat: 40.50098, lng: -74.44740 }), []);
    // Might want to move below line to CSS later
    const containerStyle = { width: '100%', height: '100%' };
    // For setting options that hide the default UI buttons so that our buttons don't conflict 
    const options = { disableDefaultUI: 'true' };

    return (
        <GoogleMap 
            zoom={15} 
            center={center} 
            mapContainerStyle={containerStyle}
            options={options}>
            <></>
        </GoogleMap>
    );
}
