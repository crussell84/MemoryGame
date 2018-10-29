import React from 'react';

const ImageRow = (props) => {

    return (
        <>
            {props.images.map((image, index) => <div className="col s3" key={index}><img src={image.src} alt={image.id} key={image.id} onClick={() => props.onClick(image.id)} /></div>)}
        </>
    )
}

export default ImageRow;