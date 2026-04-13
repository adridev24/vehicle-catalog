import React from 'react';

const VehicleList = ({ vehicles }) => {
    return (
        <div>
            <h1>Vehicle List</h1>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>{vehicle.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;