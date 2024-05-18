import React from 'react';
import Description from "../../components/Description/Description";
import style from './About.module.css'

const AboutPage = () => {
    return (
        <div className={style.main}>
            <Description main = {{title: "Title 2", description: "description 2"}}/>
        </div>
    );
};

export default AboutPage;