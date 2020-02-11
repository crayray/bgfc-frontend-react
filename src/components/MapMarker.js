import React from 'react'
import {Image} from "semantic-ui-react";
import '../stylesheets/MapMarker.css';

export default function MapMarker() {
    return (
        <div className="marker"
         style={{  cursor: 'pointer'}}
       >
            <Image src="http://localhost:3000/Brown-Girls-Food-Club-Logo-01.svg" />
        </div>
    )
}
