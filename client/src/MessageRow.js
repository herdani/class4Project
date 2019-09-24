import React from 'react';


export default ({ _id, license, Message }) => {


    return (
        <li className="MessageRow">
            <span>{license}</span>
            <span>{Message}</span>
        </li>
    )
}