import React from 'react';
import { Carousel } from 'antd'

const ImageSlider = (props)  => {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{width: '100%', height: '150px'}} src={`http://localhost:5000/${image}`} alt="product" />
                    </div>
                ))}
            </Carousel>
        </div>
    )

};

export default ImageSlider;