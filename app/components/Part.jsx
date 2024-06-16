import React from 'react'

const Part = ({name, selectedPart, setSelectedPart}) => {
    const isSelected = name.toLowerCase() === selectedPart;    
    return (
        <li
            onClick={() => setSelectedPart(name.toLowerCase())}
            className={`rounded-full px-6 py-2 border border-blue-400 text-blue-400 text-center ${isSelected && 'bg-blue-800 text-white border-blue-800'}`}
        >{name}</li>
    )
}

export default Part