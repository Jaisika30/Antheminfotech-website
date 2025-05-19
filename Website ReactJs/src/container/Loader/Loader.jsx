import React from 'react'
import { CircleLoader } from 'react-spinners';

function Loader() {
    const loaderStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "solid 1px #ddd",
        // background: "#fff",
    };

    return (
        <div style={loaderStyle}>
            <CircleLoader color="#0a507a" />
        </div>
    )
}

export default Loader