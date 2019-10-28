import Flippy from "react-flippy";
import React from "react";
import {DefaultCardContents} from "../components/DefaultCardContents";
import {TextCardContents} from "../components/TextCardContents";

const FlippyStyle = {
    marginTop: '2px',
    width: '200px',
    height: '300px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '20px',
    justifyContent: 'center'
};


export const FlippyOnHover = ( { flipDirection = 'vertical' } ) => (
    <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
    >
        <DefaultCardContents>
            I flip {flipDirection}ly on hover
        </DefaultCardContents>
    </Flippy>
);

export const FlippyOnClick = ( { front, back, flipDirection = 'vertical' } ) => (
    <Flippy
        flipOnClick={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
    >
        <TextCardContents
            front={front}
            back={back}
            bottom={''}
        >
        </TextCardContents>
    </Flippy>
);

export const ControlledFlippy = ( { isFlipped } ) => (
    <Flippy
        flipDirection="vertical"
        isFlipped={isFlipped}
        style={FlippyStyle}
    >
        <DefaultCardContents>
            I flip vertically for every 3sec. I am controlling by a upper scope.
        </DefaultCardContents>
    </Flippy>
);