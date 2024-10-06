import React, { useEffect, useState } from 'react';

const CO2Concentration = () => {
    const [mapHTML, setMapHTML] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMap = async () => {
            try {
                const response = await fetch('https://back-service-8z96.onrender.com/api/v1/maps/co2-concentrations', {
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
                        <p style={{ color: 'black' }}>This map uses data from the ODIAC 2023 inventory, which estimates global fossil fuel CO₂ emissions at a high resolution (1 km²). The dataset combines energy consumption information with satellite observations to display emissions of 2020. Urban areas, as the primary sources of emissions, are highlighted.</p>
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

export default CO2Concentration;
