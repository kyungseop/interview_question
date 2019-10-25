import React from "react";
import {BackSide, FrontSide} from "react-flippy";
import Rick from "../rick.png";

export const DefaultCardContents = ( { children } ) => (
    <React.Fragment>
        <FrontSide
            style={{
                backgroundColor: '#41669d',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <img alt={"Demo Image"}
                 src={Rick}
                 style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            RICK
            <span
                style={{
                    fontSize: '12px',
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%'
                }}>
        {children}<br/>
        (FRONT SIDE)
      </span>
        </FrontSide>
        <BackSide
            style={{
                backgroundColor: '#175852',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
            ROCKS
            <span
                style={{
                    fontSize: '12px',
                    position: 'absolute',
                    bottom: '10px',
                    width: '100%'
                }}>
        {children}<br/>
        (BACK SIDE)
      </span>
        </BackSide>
    </React.Fragment> );