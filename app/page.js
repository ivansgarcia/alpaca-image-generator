'use client';
import Image from 'next/image';
import { useReducer, useState } from 'react';
import Part from './components/Part';
import Option from './components/Option';
import AlpacaImage from './components/AlpacaImage';

const reducer = (state, action) => {
    if (action.type === 'change_part') {
        return {
            ...state,
            hair: action.hair,
            ears: action.ears,
            eyes: action.eyes,
            mouth: action.mouth,
            neck: action.neck,
            leg: action.leg,
            accesorie: action.accesorie,
            background: action.background,
        };
    }
    throw Error('Unknown action.');
};

const initialState = {
    hair: 'default',
    ears: 'default',
    eyes: 'default',
    mouth: 'default',
    neck: 'default',
    leg: 'default',
    accesorie: '',
    background: 'blue50',
};

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const parts = [
        'Hair',
        'Ears',
        'Eyes',
        'Mouth',
        'Neck',
        'Leg',
        'Accesorie',
        'Background',
    ];
    const options = {
        hair: [
            'default',
            'bang',
            'curls',
            'elegant',
            'fancy',
            'quiff',
            'short',
        ],
        ears: ['default', 'tilt-backward', 'tilt-forward'],
        eyes: ['default', 'angry', 'naughty', 'panda', 'smart', 'star'],
        mouth: ['default', 'astonished', 'eating', 'laugh', 'tongue'],
        neck: ['default', 'bend-backward', 'bend-forward', 'thick'],
        leg: [
            'default',
            'bubble-tea',
            'cookie',
            'game-console',
            'tilt-backward',
            'tilt-forward',
        ],
        accesorie: ['', 'earings', 'flower', 'glasses', 'headphone'],
        background: [
            'blue50',
            'blue60',
            'blue70',
            'darkblue30',
            'darkblue50',
            'darkblue70',
            'green50',
            'green50',
            'green70',
            'grey40',
            'grey70',
            'grey80',
            'red50',
            'red60',
            'red70',
            'yellow50',
            'yellow60',
            'yellow70',
        ],
    };

    const [selectedPart, setSelectedPart] = useState('hair');

    return (
        <main className="p-8 bg-slate-50">
            <h1 className="text-4xl font-bold my-8">ALPACA GENERATOR</h1>
            <section className="flex gap-16">
                <div className="relative">
                    <AlpacaImage state={state} />
                </div>
                <div className="flex flex-col">
                        <h2 className="self-start font-bold">ACCESORIZE THE ALPACAS</h2>
                        <ul className="flex flex-wrap gap-2 my-2">
                            {parts.map((part, index) => (
                                <Part
                                    key={index}
                                    name={part}
                                    selectedPart={selectedPart}
                                    setSelectedPart={setSelectedPart}
                                />
                            ))}
                        </ul>
                    <div>
                        <h2 className="font-bold self-start">STYLE</h2>
                        <ul className="flex flex-wrap gap-2 my-2">
                            {options[selectedPart].map((option, index) => (
                                <Option
                                    key={index}
                                    state={state}
                                    name={option}
                                    dispatch={dispatch}
                                    selectedPart={selectedPart}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="flex py-4">
                <button className="px-6 py-2 bg-white font-bold rounded">Random</button>
                <button className="px-6 py-2 bg-white font-bold rounded">Download</button>
            </section>
        </main>
    );
}
