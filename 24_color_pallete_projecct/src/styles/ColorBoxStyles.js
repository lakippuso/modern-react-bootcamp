// import chroma from "chroma-js";

// export default{
//     width: '20%',
//     height: '25%',
//     margin: '0 auto',
//     display: 'inline-block',
//     position: 'relative',
//     cursor: 'pointer',
//     textTransform: 'uppercase',
//     "& a":{
//         position: 'absolute',
//         right: 0,
//         bottom: 0,
//         padding: '10px',
//         backgroundColor: 'rgba(255, 255, 255, 0.3)',
//         color: 'white',
//     },

//     "& .ColorBox-copy-overlay": {
//         width: '100%',
//         height: '100%',
//         transition: 'transform 0.6s ease-in-out',
//         opacity: 0,
//         zIndex: 0,
//         transform: 'scale(0.1)',

//         '.show': {
//             opacity: 1,
//             zIndex: 10,
//             transform: 'scale(50)',
//             position: 'absolute',
//         }
//     },
//     "& .ColorBox-copy": {
//         '& .ColorBox-copy-content': {
//             position: 'absolute',
//             margin: '10px',
//             bottom: 0,
//             color: 'white',
//             fontSize: '.9rem',
//             letterSpacing: '1px',
//         },
//         '& .copy-button' : {
//             display: 'inline-block',
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             height: '30px',
//             width: '100px',
//             marginLeft: '-50px',
//             marginTop: '-15px',
//             backgroundColor: 'rgba(255, 255, 255, 0.3)',
//             border: 'none',
//             color: 'white',
//             cursor: 'pointer',
//             fontSize: '1rem',
//             lineHeight: '30px',
//             opacity: 0,
//         },
//         "& .ColorBox-copy-content, .copy-button":{
//             color: isLighten,
//         },
//     },
//     "& .ColorBox-copy-message": {
//         color: 'white',
//         position: 'fixed',
//         flexDirection: 'column',
//         top: '0',
//         left: '0',
//         right: '0',
//         bottom: '0',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100%',
//         fontSize: '4rem',
        
//         transform: 'scale(0.1)',
//         opacity: '0',
//         zIndex: '0',

//         '.show': {
//             transform: 'scale(1)',
//             opacity: 1,
//             zIndex: 12,
//             transition: 'all 0.4s ease-in-out',
//             transitionDelay: '0.3s',
//         },
//         "& h1": {
//             fontWeight: '400',
//             textShadow: '1px 2px black',
//             backgroundColor: 'rgba(255, 255, 255, 0.3)',
//             width: '100%',
//             textAlign: 'center',
//             marginBottom: '0',
//         },

//         "& .ColorBox-copy-message-text": {
//             color: isLighten,
//             fontSize: '2rem',
//             fontWeight: '100',
//         },
//     },
//     ':hover .copy-button': {
//         opacity: 1,
//         transition: '0.5s ease-in-out',
//     },
//     "& .see-more":{
//         color: isLighten,
//     }
// }