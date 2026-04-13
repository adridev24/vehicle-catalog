import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({ filters, onFilterChange }) => {
    return (
        <form>
            <div>
                <label htmlFor="make">Make:</label>
                <input
                    type="text"
                    id="make"
                    value={filters.make}
                    onChange={e => onFilterChange('make', e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    value={filters.model}
                    onChange={e => onFilterChange('model', e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    id="year"
                    value={filters.year}
                    onChange={e => onFilterChange('year', e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={filters.price}
                    onChange={e => onFilterChange('price', e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="fuelType">Fuel Type:</label>
                <select
                    id="fuelType"
                    value={filters.fuelType}
                    onChange={e => onFilterChange('fuelType', e.target.value)}
                >
                    <option value="">Select Fuel Type</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                </select>
            </div>
            <div>
                <label htmlFor="transmission">Transmission:</label>
                <select
                    id="transmission"
                    value={filters.transmission}
                    onChange={e => onFilterChange('transmission', e.target.value)}
                >
                    <option value="">Select Transmission</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                </select>
            </div>
            <button type="submit">Filter</button>
        </form>
    );
};

FilterForm.propTypes = {
    filters: PropTypes.shape({
        make: PropTypes.string,
        model: PropTypes.string,
        year: PropTypes.number,
        price: PropTypes.number,
        fuelType: PropTypes.string,
        transmission: PropTypes.string,
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default FilterForm;