import React from 'react';
import style from './Description.module.css'
const Description = ({main}) => {
    return (
        <div>
            <p className={style.title}>{main.title}</p>

            <h1>{main.description}</h1>
        </div>
    );
};

export default Description;