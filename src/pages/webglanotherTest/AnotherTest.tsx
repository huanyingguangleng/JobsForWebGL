import React, { useContext, useEffect } from 'react';
import { PropsData } from '../../components/MainBox';
import './index.scss';
// const style = require('./index.module.scss')

export const Anothertest = () => {

    const allData:any = useContext(PropsData);

    const init = () => {

        const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
        const ctx = canvas?.getContext('2d');
        let x = 0;
        let y = 0;
        const d = 30;
        const draw = () => {
            ctx.clearRect(0, 0, 400, 400);
            ctx?.fillRect(x, y, d, d);
            x += 30;
            y += 30;
        }
        
        const interID = setInterval(() => {
            draw();

        }, 6000)
        return interID;
    };

    useEffect(()=>{init()}, []);

    return (
        <>
        <div className='cas' style={{border: '1px solid red'}}>origin</div>
        <canvas id='canvas' width="400" height="400" style={{border: '1px solid red'}}></canvas>
        <button onClick={() => {
            allData.changePage(allData.PAGE.WEBGLTEST);
        }}>switch to webgl-one</button>
        <button onClick={() => {
            clearInterval(init());
        }}>stop animation</button>
        </>
    )
}