import React from 'react'

const Option = ({ name, dispatch, selectedPart, state }) => {
    const changeOption = () => {
        let newState = { type: 'change_part', ...state};
        newState[selectedPart] = name;
        dispatch(newState);
    }
    return (
        <div
            className={`rounded-full px-6 py-2 border border-blue-400 text-blue-400 text-center ${state[selectedPart] === name && 'bg-blue-800 text-white border-blue-800'}`}
            onClick={() => changeOption()}
        >{name}</div>
    )
}

export default Option