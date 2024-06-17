import React from 'react';

const Option = ({ name, dispatch, selectedPart, state }) => {
    const bgColors = {
        blue50: 'bg-[#5396F6]',
        blue60: 'bg-[#2A7AF3]',
        blue70: 'bg-[#2A5BA6]',
        darkblue30: 'bg-[#798FAE]',
        darkblue50: 'bg-[#012965]',
        darkblue70: 'bg-[#00183D]',
        green50: 'bg-[#9FD966]',
        green60: 'bg-[#75BC29]',
        green70: 'bg-[#6B943F]',
        grey40: 'bg-[#CCCCCC]',
        grey70: 'bg-[#656565]',
        grey80: 'bg-[#333333]',
        red50: 'bg-[#E85D23]',
        red60: 'bg-[#CB4C12]',
        red70: 'bg-[#A0370B]',
        yellow50: 'bg-[#FCD23F]',
        yellow60: 'bg-[#E6B60C]',
        yellow70: 'bg-[#9FD966]',
    };
    const changeOption = () => {
        let newState = { type: 'change_part', ...state };
        newState[selectedPart] = name;
        dispatch(newState);
    };
    return (
        <div
            className={`rounded-full border ${selectedPart === 'background' ? 'px-2' : 'px-8'} py-2 text-center ${state[selectedPart] === name ? 'cursor-default border-blue-800 bg-blue-800 text-white' : 'cursor-pointer border-blue-400 text-blue-400'}`}
            onClick={() => changeOption()}
        >
            {selectedPart === 'background' ? (
                <div className={`${bgColors[name]} h-4 w-4`}></div>
            ) : (
                name[0].toUpperCase() + name.substring(1)
            )}
        </div>
    );
};

export default Option;
