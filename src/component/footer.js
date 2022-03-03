import React from 'react';

var style = {
    fontFamily : 'DBOzoneX',
    fontSize: '22px',
    color:'#999999',
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "65px",
    width: "100%",
}


function Footer() {
    return (
        <div>
            <div style={style}>
                Copyright © 2564, Thai Life Insurance Public Co. Ltd
            </div>
        </div>
    )
}

export default Footer