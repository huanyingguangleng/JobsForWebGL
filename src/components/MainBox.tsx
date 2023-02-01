import React, { createContext, useEffect, useState } from 'react';
import { WebglOne } from '../pages/webglTest/WebglOne';
import { Anothertest } from '../pages/webglanotherTest/AnotherTest';

const PAGE = {
    ORIGIN: Symbol(),
    WEBGLTEST: Symbol()
  };

export const PropsData = createContext({});

export const MainBox = () => {

    const [page, setPage] = useState(PAGE.ORIGIN);
    const changePage = (page:any) => {
        setPage(page);
    };
    const allstates = {
        PAGE,
        changePage
    };

    switch(page) {
        case PAGE.ORIGIN:
            return (
                <PropsData.Provider value={ allstates }>                   
                    <Anothertest/>
                </PropsData.Provider>
            );
        case PAGE.WEBGLTEST:
            return (
                <PropsData.Provider value={ allstates }>
                    <WebglOne/>
                </PropsData.Provider>
            );
            default:
                return null;
    }
}