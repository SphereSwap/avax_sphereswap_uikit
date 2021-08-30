import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" {...props}>
            <path class="st0" d="M10,17.3c0.5,3.9,3.5,29.4,4.3,33.7c0.1,0.6,0.4,1.9,1,2c0.6,0.1,1.4-1.2,1.7-1.8c2.3-4.2,16.3-32,17.3-34
	c-1.2,0.1-2.4,0.3-3.6,0.4L16,48.6c0.3-11.9,0.5-23.9,0.8-35.8C14.6,14.3,12.3,15.8,10,17.3z"/>
            <path class="st1" d="M26.7,8.4c0,15.8,0,31.6,0,47.4c0.2,2,0.7,5.9,1.4,5.9c0.6,0,1.1-3.8,1.3-5.8C28.9,40,28.4,24.2,28,8.4
	C27.6,8.4,27.2,8.4,26.7,8.4z"/>
            <path class="st1" d="M24.1,11.5c11.4-1.1,22.8-2.1,34.2-3.2l0.6,4.9c-11.7-0.3-23.3-0.6-35-0.8c-0.2,0-1.2-0.2-1.2-0.4
	C22.8,11.8,24,11.5,24.1,11.5z"/>
            <path class="st1" d="M24.2,21.2c11.6,0.7,23.2,1.5,34.7,2.2V27c-11.6-1.5-23.2-3-34.8-4.5c-0.9-0.2-1.4-0.6-1.3-0.9
	C22.9,21.4,23.5,21.1,24.2,21.2z"/>
            <path class="st0" d="M18.9,7.3" />
            <path class="st0" d="M25.4,45.7" />
            <line class="st1" x1="0" y1="64" x2="0" y2="64" />
            <path class="st1" d="M33.4,56.3" />
            <path class="st1" d="M30.2,57.1" />
            <line class="st1" x1="0" y1="64" x2="0" y2="64" />
            <path class="st1" d="M23.8,15" />
        </Svg>
    );
};

export default Icon;
