import React, { useState, useMemo, useEffect, useRef } from 'react';
import * as THREE from 'three'
import * as St from 'stats.js'




export const initStats = (type:any) => {
    const paneltype = (typeof type !== 'undefined' && type) && (!isNaN(type)) ? parseInt(type) : 0;
    const stats = new Stats();
    stats.showPanel(paneltype);
    document.body.appendChild(stats.dom);
    return stats;
};


