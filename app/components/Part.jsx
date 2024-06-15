import React from 'react'

const Part = ({name, selectedPart, setSelectedPart}) => {
    const isSelected = name.toLowerCase() === selectedPart;    
    return (
        <div
            onClick={() => setSelectedPart(name.toLowerCase())}
            className={`rounded-full border text-center ${isSelected && 'bg-blue-400'}`}
        >{name}</div>
    )
}

export default Part