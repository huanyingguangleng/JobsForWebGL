import React, { useContext, useEffect } from 'react';
import { PropsData } from '../../components/MainBox';
import './index.scss';
// const style = require('./index.module.scss')

export const Anothertest = () => {

    const allData:any = useContext(PropsData);

    const init = () => {

        const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
        const ctx = canvas?.getContext('2d');
        ctx?.fillRect(0, 0, 400, 100);

    };

    useEffect(()=>{init()}, []);

    return (
        <>
        <div className='cas' style={{border: '1px solid red'}}>origin</div>
        <button onClick={() => {
            allData.changePage(allData.PAGE.WEBGLTEST);
        }}>switch to webgl-one</button>
        <canvas id='canvas' width="400" height="400" style={{border: '1px solid red'}}></canvas>
        </>
    )
}