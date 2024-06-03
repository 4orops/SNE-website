import React from "react";
import Player from "./Player";

function latestRelease() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-12 p-4">
                <h2 className="display-2">
                    <strong>Latest Release</strong>
                </h2>
                <Player/>
            </div>  
        </div>
        </div>
        
    )
}

export default latestRelease;