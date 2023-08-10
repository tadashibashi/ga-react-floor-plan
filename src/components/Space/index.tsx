import React from "react";

import "./Space.css";

interface SpaceProps {
    color?: string;
    type: string;
    number?: number;
    prefix?: string;
    children?: React.JSX.Element[] | undefined;
}

export default function Space({color, number, type, prefix, children}: SpaceProps) {

    return (
        <div className="Space" style={{background: color || "transparent"}}>
            <p>{ (prefix ? prefix + " " : "") + type + ((number !== undefined && number > 0) ? " " + number : "") }</p>
            <div className="children">
                {children}
            </div>

        </div>
    );

}
