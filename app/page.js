'use client';
import Image from 'next/image';
import { useState } from 'react';
import Part from './components/Part';
import Option from "./components/Option";
import AlpacaImage from "./components/AlpacaImage";

export default function Home() {
    const parts = [
        'Hair',
        'Ears',
        'Eyes',
        'Mouth',
        'Neck',
        'Leg',
        'Accesories',
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
        accesories: ['', 'earings', 'flower', 'glasses', 'headphone'],
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

    const [hair, setHair] = useState('default');
    const [ears, setEars] = useState('default');
    const [eyes, setEyes] = useState('default');
    const [mouth, setMouth] = useState('default');
    const [neck, setNeck] = useState('default');
    const [leg, setLeg] = useState('default');
    const [accesorie, setAccesorie] = useState();
    const [background, setBackground] = useState('blue50');

    return (
        <main>
            <h1>ALPACA GENERATOR</h1>
            <section className="flex">
                <div className="w-80 h-80 relative">
                    <AlpacaImage hair={hair} ears={ears} eyes={eyes} mouth={mouth} neck={neck} leg={leg} accesorie={accesorie} background={background}/>
                </div>
            </section>
            <section>
                <div>
                    <h2>ACCESORIZE THE ALPACAS</h2>
                    {parts.map((part, index) => (
                        <Part
                            key={index}
                            name={part}
                            selectedPart={selectedPart}
                            setSelectedPart={setSelectedPart}
                        />
                    ))}
                </div>
                <div>
                    <h2>STYLE</h2>
                    {options[selectedPart].map((option, index) => (
                        <Option key={index} name={option} />
                    ))}
                </div>
            </section>
            <section className="flex">
                <button>Random</button>
                <button>Download</button>
            </section>
        </main>
    );
}
