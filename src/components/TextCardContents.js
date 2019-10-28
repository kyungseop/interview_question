import React from "react";
import {BackSide, FrontSide} from "react-flippy";

//TODO rate 를 bottom 에 추가
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
      </span>
        </BackSide>
    </React.Fragment> );