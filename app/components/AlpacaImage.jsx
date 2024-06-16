import Image from 'next/image';
import React from 'react';

const AlpacaImage = ({ state }) => {
    const { hair, ears, eyes, mouth, neck, leg, accesorie, background } = state;
    const backgroundURL = `/backgrounds/${background}.png`
    const neckURL = `/neck/${neck}.png`
    const hairURL = `/hair/${hair}.png`
    const eyesURL = `/eyes/${eyes}.png`
    const earsURL = `/ears/${ears}.png`
    const legURL = `/leg/${leg}.png`
    const mouthURL = `/mouth/${mouth}.png`
    const accesorieURL = `/accessories/${accesorie}.png`
    return (
        <div className="h-[500px] w-[500px]">
            <Image src={backgroundURL} alt="background" fill />
            <Image src={neckURL} alt="neck" fill />
            <Image src="/nose.png" alt="nose" fill />
            <Image src={hairURL} alt="hair" fill />
            <Image src={eyesURL} alt="eyes" fill />
            <Image src={earsURL} alt="ears" fill />
            <Image src={legURL} alt="leg" fill />
            <Image src={mouthURL} alt="mouth" fill />
            {accesorie && <Image src={accesorieURL} alt="accesorie" fill />}
        </div>
    );
};

export default AlpacaImage;
