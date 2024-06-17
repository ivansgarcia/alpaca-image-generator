import React from 'react';

const Part = ({ name, selectedPart, setSelectedPart }) => {
    const isSelected = name === selectedPart;
    return (
        <li
            onClick={() => setSelectedPart(name)}
            className={`rounded-full border px-8 py-2 text-center ${isSelected ? 'cursor-default border-blue-800 bg-blue-800 text-white' : 'cursor-pointer border-blue-400 text-blue-400'}`}
        >
            {name[0].toUpperCase() + name.substring(1)}
        </li>
    );
};

export default Part;
