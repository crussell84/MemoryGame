import React from 'react';


const Images = (props) => {
    const images = props.images;
    return (
            <div className="row">
                {images.map((image, index) => <div className="col s3" key={index}><img src={image.src} alt={image.id} key={image.id} onClick={() => props.onClick(image.id)}/></div>)}
            </div>
    )
}

export default Images;