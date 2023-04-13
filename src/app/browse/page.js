'use client';

import { useLoadScript } from "@react-google-maps/api";
import Map from '../components/map.jsx';
import LogSignButtons from '../components/log_sign_buttons.jsx';

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

