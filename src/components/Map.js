import React, { useState, useRef, useEffect } from 'react';

const MyMap = () => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const loadMap = async () => {
            const { Loader } = await import('@googlemaps/js-api-loader');
            const loader = new Loader({
                googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
                libraries: ['places'],
            });
            const google = await loader.load();
            if (google) {
                const mapOptions = {
                    center: { lat: 6.9271, lng: 79.8612 }, // Centered at Colombo
                    zoom: 8, // Zoom level
                };
                const newMap = new google.maps.Map(mapRef.current, mapOptions);
                setMap(newMap);

                // Add marker for Colombo
                const colomboMarker = new google.maps.Marker({
                    position: { lat: 6.9271, lng: 79.8612 },
                    map: newMap,
                    title: 'Colombo',
                    icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                });
                const colomboInfoWindow = new google.maps.InfoWindow({
                    content: '<div style="color: black;">Colombo</div>',
                });
                colomboInfoWindow.open(newMap, colomboMarker);

                // Add marker for Sigiriya
                const sigiriyaMarker = new google.maps.Marker({
                    position: { lat: 7.9544, lng: 80.7567 },
                    map: newMap,
                    title: 'Sigiriya',
                    icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                });
                const sigiriyaInfoWindow = new google.maps.InfoWindow({
                    content: '<div style="color: black;">Sigiriya</div>',
                });
                sigiriyaInfoWindow.open(newMap, sigiriyaMarker);

                // Add marker for Ella
                const ellaMarker = new google.maps.Marker({
                    position: { lat: 6.8781, lng: 81.0579 },
                    map: newMap,
                    title: 'Ella',
                    icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                });
                const ellaInfoWindow = new google.maps.InfoWindow({
                    content: '<div style="color: black;">Ella</div>',
                });
                ellaInfoWindow.open(newMap, ellaMarker);

                // Add marker for Nuwara Eliya
                const nuwaraEliyaMarker = new google.maps.Marker({
                    position: { lat: 6.9497, lng: 80.7891 },
                    map: newMap,
                    title: 'Nuwara Eliya',
                    icon: 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                });
                const nuwaraEliyaInfoWindow = new google.maps.InfoWindow({
                    content: '<div style="color: black;">Nuwara Eliya</div>',
                });
                nuwaraEliyaInfoWindow.open(newMap, nuwaraEliyaMarker);

                // Add marker for Polonnaruwa
                const polonnaruwaMarker = new google.maps.Marker({
                    position: { lat: 7.9403, lng: 81.0188 },
                    map: newMap,
                    title: 'Polonnaruwa',
                    icon: 'https://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                });
                const polonnaruwaInfoWindow = new google.maps.InfoWindow({
                    content: '<div style="color: black;">Polonnaruwa</div>',
                });
                polonnaruwaInfoWindow.open(newMap, polonnaruwaMarker);

                // Add marker for Unawatuna
                const unawatunaMarker = new google.maps.Marker({
                    position: { lat: 6.0077, lng: 80.7666 },
                    map: newMap,
                    title: 'Unawatuna',
                    icon: 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png',
                });
                const unawatunaInfoWindow = new google.maps.InfoWindow({
                    content: '<div style="color: black;">Unawatuna</div>',
                });
                unawatunaInfoWindow.open(newMap, unawatunaMarker);
            }
        };

        loadMap();
    }, []);

    return (
        <div className='section'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 mb-3 bg-white '>
                <div className='col-md-12 p-4'>
                    <h1 style={{ fontFamily: 'cursive' }} className='text-center text-black text-3xl font-mono'>Our Destinations Locations</h1>
                    <img style={{ width: '100%', height: '525px' }} src="/colombo.jpg" className="w-full h-auto" alt="Map" />
                </div>
                <div className='col-md-12 p-4'>
                    <div ref={mapRef} style={{ width: '100%', height: '600px' }} />
                </div>
            </div>
        </div>
    );
};

export default MyMap;
