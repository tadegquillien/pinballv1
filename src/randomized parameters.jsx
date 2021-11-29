import { shuffle } from "./convenience-functions";


import A1C1TopLeft from './A1C1TopLeft.mp4';
import A1C9TopLeft from './A1C9TopLeft.mp4';
import A9C1TopLeft from './A9C1TopLeft.mp4';
import A9C9TopLeft from './A9C9TopLeft.mp4';

import A1C1TopRight from './A1C1TopRight.mp4';
import A1C9TopRight from './A1C9TopRight.mp4';
import A9C1TopRight from './A9C1TopRight.mp4';
import A9C9TopRight from './A9C9TopRight.mp4';

import A1C1TopLeftCout from './A1C1TopLeftCout.mp4';
import A1C9TopLeftCout from './A1C9TopLeftCout.mp4';
import A9C1TopLeftCout from './A9C1TopLeftCout.mp4';
import A9C9TopLeftCout from './A9C9TopLeftCout.mp4';

import A1C1TopRightCout from './A1C1TopRightCout.mp4';
import A1C9TopRightCout from './A1C9TopRightCout.mp4';
import A9C1TopRightCout from './A9C1TopRightCout.mp4';
import A9C9TopRightCout from './A9C9TopRightCout.mp4';

import attentionCheckLeft from './attentionCheckLeft.mp4';
import attentionCheckRight from './attentionCheckRight.mp4';


export const condition = Math.random() > .5 ? "in" : "out";

const videolistIn = shuffle([
    {
        "clip": A1C1TopLeft,
        "A_orientation": 'left',
        "C_orientation": "left",
        "Pa": .1,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A1C1TopRight,
        "A_orientation": 'right',
        "C_orientation": "right",
        "Pa": .1,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A1C9TopLeft,
        "A_orientation": 'left',
        'C_orientation': 'left',
        "Pa": .1,
        "Pc": .9,
        "type": 'test'
    },
    {
        "clip": A1C9TopRight,
        "A_orientation": 'right',
        'C_orientation': 'right',
        "Pa": .1,
        "Pc": .9,
        "type": 'test'
    },
    {
        "clip": A9C1TopLeft,
        "A_orientation": 'left',
        'C_orientation': 'left',
        "Pa": .9,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A9C1TopRight,
        "A_orientation": 'right',
        'C_orientation': 'right',
        "Pa": .9,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A9C9TopLeft,
        "A_orientation": 'left',
        'C_orientation': 'left',
        "Pa": .9,
        "Pc": .9,
        "type": 'test'
    },
    {
        "clip": A9C9TopRight,
        "A_orientation": 'right',
        'C_orientation': 'right',
        "Pa": .9,
        "Pc": .9,
        "type": 'test'
    },
    


])

const videolistOut = shuffle([
    {
        "clip": A1C1TopLeftCout,
        "A_orientation": 'left',
        "C_orientation": "right",
        "Pa": .1,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A1C1TopRightCout,
        "A_orientation": 'right',
        "C_orientation": "left",
        "Pa": .1,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A1C9TopLeftCout,
        "A_orientation": 'left',
        'C_orientation': 'right',
        "Pa": .1,
        "Pc": .9,
        "type": 'test'
    },
    {
        "clip": A1C9TopRightCout,
        "A_orientation": 'right',
        'C_orientation': 'left',
        "Pa": .1,
        "Pc": .9,
        "type": 'test'
    },
    {
        "clip": A9C1TopLeftCout,
        "A_orientation": 'left',
        'C_orientation': 'right',
        "Pa": .9,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A9C1TopRightCout,
        "A_orientation": 'right',
        'C_orientation': 'left',
        "Pa": .9,
        "Pc": .1,
        "type": 'test'
    },
    {
        "clip": A9C9TopLeftCout,
        "A_orientation": 'left',
        'C_orientation': 'right',
        "Pa": .9,
        "Pc": .9,
        "type": 'test'
    },
    {
        "clip": A9C9TopRightCout,
        "A_orientation": 'right',
        'C_orientation': 'left',
        "Pa": .9,
        "Pc": .9,
        "type": 'test'
    },
    


])

export const attentionChecks = shuffle([
    {
        "clip": attentionCheckLeft,
        "check_id": "left",
        "type": "check"
    },
    {
        "clip": attentionCheckRight,
        "check_id": "right",
        "type": "check"
    }

])
export const videolist = condition === "in" ? videolistIn : videolistOut;