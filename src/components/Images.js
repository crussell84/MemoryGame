import React from 'react';
import imageArray from '../images.json';

const Images = (props) => {
    return (
        <div className="container">
            <div className="row">
                {imageArray.map((image, index) => <div className="col s3" key={index}><img src={image.src} key={image.id} onClick={props.onClick}/></div>)};
            </div>
        </div>
    )
}

export default Images;