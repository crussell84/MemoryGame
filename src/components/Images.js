import React from 'react';
import ImageRow from './ImageRow';

function chunkArray(myArray, chunk_size) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

const Images = (props) => {

    const images = props.images;
    const chunkedImages = chunkArray(images, 4);
    return (
        <>
            {chunkedImages.map((row, index) => <div className="row" key={index}>
                <ImageRow images={row} onClick={props.onClick} />
            </div>)}
        </>
    )
}

export default Images;