import React from 'react';

const VehicleCard = ({ vehicle }) => {
    return (
        <div className="vehicle-card">
            <h2>{vehicle.name}</h2>
            <p>{vehicle.description}</p>
            <p>Price: ${vehicle.price}</p>
        </div>
    );
};

export default VehicleCard;