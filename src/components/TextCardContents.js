import React from "react";
import {BackSide, FrontSide} from "react-flippy";

export const TextCardContents = ( { front, back, bottom } ) => (
    <React.Fragment>
        <FrontSide
            style={{
                backgroundColor: '#41669d',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            {front}
            <span
                style={{
                    fontSize: '12px',
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%'
                }}>
        {bottom}<br/>
        (FRONT SIDE)
      </span>
        </FrontSide>
        <BackSide
            style={{
                fontSize: '12px',
                backgroundColor: '#175852',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
            {back}
            <span
                style={{
                    fontSize: '12px',
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%'
                }}>
        {bottom}<br/>
        (BACK SIDE)
      </span>
        </BackSide>
    </React.Fragment> );