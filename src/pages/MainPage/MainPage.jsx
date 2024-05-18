import React from 'react';
import Description from "../../components/Description/Description";
import style from './Main.module.css'

const MainPage = () => {
    return (
        <div className={style.main}>
            <Description main = {{title: "Title", description: "description"}}/>
        </div>
    );
};

export default MainPage;