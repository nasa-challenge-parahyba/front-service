import React, { useEffect, useState } from 'react';

const CH4FossilEmission = () => {
    const [mapHTML, setMapHTML] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMap = async () => {
            try {
                const response = await fetch('https://back-service-8z96.onrender.com/api/v1/maps/methane-emissions/fossil', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const html = await response.text();
                setMapHTML(html);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching map:', error);
                setLoading(false);
            }
        };

        fetchMap();
    }, []);

    return (
        <div style={{
            // display: 'flex',
            padding: '100px',
            // justifyContent: 'center',
            // alignItems: 'center',
            width: '80%',
            // height: 'auto',
            // backgroundColor: 'black',
            // position: 'relative'
        }} >
            {loading && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '8px solid #f3f3f3',
                    borderTop: '8px solid #3498db',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    animation: 'spin 1s linear infinite'
                }}></div>
            )}
            <div dangerouslySetInnerHTML={{ __html: mapHTML }} style={{ width: '100%', height: '100%' }} />
            {
                !loading && mapHTML && (
                    <div style={{
                        position: 'absolute',
                        bottom: '250px',
                        left: '150px',
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        padding: '20px',
                        borderRadius: '10px',
                        fontSize: '20px',
                        color: 'black',
                        width: '300px',
                        zIndex: 10
                    }}>
                        <h4>Fossil Fuel CO₂ Emissions Map</h4>
                        <p style={{ color: 'black' }}>Fossil emissions arise from the decomposition of ancient carbon materials like natural gas and coal bed methane, as well as minor contributions from geological seeps. These emissions are analyzed through atmospheric measurements of methane isotopes, which help identify their sources, including fossil fuel exploration. Utilizing data from NOAA and research collaboration with the University of Colorado Boulder, scientists from NASA and NOAA modeled fossil methane emissions based on information from 2016.
                        </p>
                    </div>
                )
            }
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div >
    );
};

export default CH4FossilEmission;
