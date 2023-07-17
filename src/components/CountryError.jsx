import React from 'react';

const CountryError = ({ errName }) => (
    <div className="w-full flex justify-center items-center">
        <h1 className="font-bold text-2xl text-white mt-2">
            {errName}
        </h1>
    </div>

);

export default CountryError;
