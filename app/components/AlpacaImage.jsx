import Image from 'next/image';
import React from 'react';

const AlpacaImage = ({ state }) => {
    const { hair, ears, eyes, mouth, neck, leg, accesories, background } =
        state;
    const backgroundURL = `/backgrounds/${background}.png`;
    const neckURL = `/neck/${neck}.png`;
    const hairURL = `/hair/${hair}.png`;
    const eyesURL = `/eyes/${eyes}.png`;
    const earsURL = `/ears/${ears}.png`;
    const legURL = `/leg/${leg}.png`;
    const mouthURL = `/mouth/${mouth}.png`;
    const accesoriesURL = `/accessories/${accesories}.png`;
    return (
        <>
            <Image src={backgroundURL} alt="background" width={400} height={400} priority className="absolute"/>
            <Image src={neckURL} alt="neck" width={400} height={400} priority className="absolute" />
            <Image src="/nose.png" alt="nose" width={400} height={400} priority className="absolute" />
            <Image src={hairURL} alt="hair" width={400} height={400} priority className="absolute" />
            <Image src={eyesURL} alt="eyes" width={400} height={400} priority className="absolute" />
            <Image src={earsURL} alt="ears" width={400} height={400} priority className="absolute" />
            <Image src={legURL} alt="leg" width={400} height={400} priority className="absolute" />
            <Image src={mouthURL} alt="mouth" width={400} height={400} priority className="absolute" />
            {accesories !== 'none' && (
                <Image src={accesoriesURL} alt="accesories" width={400} height={400} priority className="absolute" />
            )}
        </>
    );
};

export default AlpacaImage;
