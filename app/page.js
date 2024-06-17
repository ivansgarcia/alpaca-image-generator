'use client';
import Image from 'next/image';
import { useReducer, useState } from 'react';
import Part from './components/Part';
import Option from './components/Option';
import AlpacaImage from './components/AlpacaImage';
import html2canvas from 'html2canvas';
import { parts, options, initialState } from './utils/data';
import reducer from './utils/reducer';

export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [selectedPart, setSelectedPart] = useState('hair');

    const printImage = async () => {
        const element = document.getElementById('print');
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        link.href = data;
        link.download = 'download-image.jpg';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-200 p-2 md:p-8">
            <main>
                <h1 className="my-8 text-center text-3xl font-bold md:text-start md:text-5xl">
                    ALPACA GENERATOR
                </h1>
                <section className="flex flex-wrap justify-center gap-8 md:gap-16">
                    <div
                        id="print"
                        className="relative h-64 w-64 md:h-[400px] md:w-[400px]"
                    >
                        <AlpacaImage state={state} />
                    </div>
                    <div className="flex w-full flex-col gap-2 px-4 md:w-[580px] md:px-16">
                        <h2 className="self-start font-extrabold">
                            ACCESORIZE THE ALPACAS
                        </h2>
                        <ul className="my-2 flex flex-wrap justify-center gap-2 md:justify-start md:text-lg">
                            {parts.map((part, index) => (
                                <Part
                                    key={index}
                                    name={part}
                                    selectedPart={selectedPart}
                                    setSelectedPart={setSelectedPart}
                                />
                            ))}
                        </ul>

                        <h2 className="mt-6 self-start font-extrabold">
                            STYLE
                        </h2>
                        <ul className="my-2 flex flex-wrap justify-center gap-2 md:justify-start md:text-lg">
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
                </section>
                <section className="flex flex-wrap justify-center gap-4 py-8 text-sm md:justify-start md:gap-7">
                    <button
                        onClick={() =>
                            dispatch({
                                type: 'random_parts',
                            })
                        }
                        className="flex items-center gap-2 rounded bg-white px-6 py-3 font-bold md:px-10 md:py-4"
                    >
                        <Image
                            src="/random.png"
                            alt="shuffle"
                            width={25}
                            height={25}
                        />
                        Random
                    </button>
                    <button
                        onClick={printImage}
                        className="flex flex-wrap items-center gap-2 rounded bg-white px-6 py-3 font-bold md:px-10 md:py-4"
                    >
                        <Image
                            src="/download.png"
                            alt="download"
                            width={25}
                            height={25}
                        />
                        Download
                    </button>
                </section>
            </main>
        </div>
    );
}
