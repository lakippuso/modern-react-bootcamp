import { Box } from '@mui/material';
import chroma from 'chroma-js';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link, useParams } from 'react-router-dom';
import sizeHelper from '../sizeHelper';

export default function ColorBox(props){
    const changeOnCopy = () =>{
        setIsCopying( true );

        setTimeout(() => {
            setIsCopying( false );
        }, 1500);
    };
    let [ isCopying, setIsCopying ] = useState(false);
    const { name, color, id, isMultiPalette } = props;

    let isLighten = chroma(color).luminance() > 0.62 ? 'rgba(0,0,0,0.5)' : 'white';

    let params = useParams();
    
    const style = {
        backgroundColor: color,
        width: '20%',
        height: isMultiPalette ? '25%' : "50% ",
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        textTransform: 'uppercase',
        "& a":{
            position: 'absolute',
            right: 0,
            bottom: 0,
            padding: '5px',
            fontSize: '.6rem',
            textDecoration: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            color: 'white',
        },
        "& .ColorBox-copy-overlay": {
            backgroundColor: color,
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s ease-in-out',
            
            opacity: isCopying ? 1 : 0,
            zIndex: isCopying ? 10 : 0,
            transform: isCopying ? 'scale(50)' : 'scale(0.1)',
            position: isCopying && 'absolute',
        },
        "& .ColorBox-copy": {
            '& .ColorBox-copy-content': {
                position: 'absolute',
                margin: '10px',
                bottom: 0,
                color: 'white',
                fontSize: '.9rem',
                letterSpacing: '1px',
            },
            '& .copy-button' : {
                display: 'inline-block',
                position: 'absolute',
                top: '50%',
                left: '50%',
                height: '30px',
                width: '100px',
                marginLeft: '-50px',
                marginTop: '-15px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                lineHeight: '30px',
                opacity: 0,
            },
            "& .ColorBox-copy-content, .copy-button":{
                color: isLighten,
            },
        },
        "& .ColorBox-copy-message": {
            color: 'white',
            position: 'fixed',
            flexDirection: 'column',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            fontSize: '4rem',
            
            transition: isCopying && 'all 0.4s ease-in-out',
            transitionDelay: isCopying && '0.3s',
            transform: isCopying ? 'scale(1)' :'scale(0.1)',
            opacity: isCopying ? '1' : '0',
            zIndex: isCopying ? '12' : '0',
            
            "& h1": {
                fontWeight: '400',
                textShadow: '1px 2px black',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                width: '100%',
                textAlign: 'center',
                marginBottom: '0',
                
                [sizeHelper.down('lg')]: {
                    fontSize: '5rem',
                },
                [sizeHelper.down('sm')]: {
                    fontSize: '3rem',
                },
            },

            "& .ColorBox-copy-message-text": {
                color: isLighten,
                fontSize: '2rem',
                fontWeight: '100',
                [sizeHelper.down('lg')]: {
                    fontSize: '1.4rem',
                },
                [sizeHelper.down('sm')]: {
                    fontSize: '1.1rem',
                },
            },
        },
        ':hover .copy-button': {
            opacity: 1,
            transition: '0.5s ease-in-out',
        },
        "& .see-more":{
            color: isLighten,
        },
        [sizeHelper.down('lg')]: {
            width: '25%',
            height: isMultiPalette ? '20%' : "33.3333%",
        },
        [sizeHelper.down('md')]: {
            width: '50%',
            height: isMultiPalette ? '10%' : "20% ",
        },
        [sizeHelper.down('sm')]: {
            width: '100%',
            height: isMultiPalette ? '5%' : "10%",
        },
    }
    
    return (
        <CopyToClipboard text={color} onCopy={changeOnCopy}>
            <Box className="ColorBox" sx={style}>
                <div className={`ColorBox-copy-overlay`}></div>
                <div className="ColorBox-copy">                
                    <div className={`ColorBox-copy-content`}>{name}</div>
                    <button className={`copy-button`}>COPY</button>
                </div>
                <div className={`ColorBox-copy-message`}>
                    <h1>COPIED!</h1>
                    <p className={`ColorBox-copy-message-text`}>{color}</p>
                </div>
                {isMultiPalette 
                && <Link to={`/palette/${params.paletteId}/${id}`} 
                        onClick={e => e.stopPropagation()}
                        className={`see-more`}
                    >
                            More
                    </Link>
                }
            </Box>
        </CopyToClipboard>
    );
}