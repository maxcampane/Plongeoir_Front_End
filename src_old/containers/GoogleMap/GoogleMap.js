import React from "react";
import ReactMapGL from "react-map-gl";

export default function ReactMap() {
    const [viewport, setViewport] = React.useState({
        latitude: 45.011607,
        longitude: 5.936143,
        width: "100%",
        height: "100%",
        display: "inline",
        zoom: 10,
        zIndex: 2,
    });

    return (
        <ReactMapGL {...viewport}
                    mapboxApiAccessToken={"pk.eyJ1Ijoic2NyZWFtcGxhc21heCIsImEiOiJjazZ6dDJqMG0xODcwM2Ztdng4aTFkODk0In0.Fi7W4oaDxJdIYJoOflX1zA"}
                    mapStyle={"mapbox://styles/screamplasmax/ck6ztaj5732r51inshfroovdf"}
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}/>
    );
}