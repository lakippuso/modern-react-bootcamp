import React from 'react';
import { useParams, Navigate } from "react-router-dom";

export default function Dog(props) {
    let params = useParams();
    let dog = props.dogs[params.id];
    if(!dog){
        return (<Navigate to="/dogs"/>)
    }
    return (
        <div className="Dog">
            <div className="card">
                <div className="card-title">{dog.name}</div>
                <div className="card-body">
                    <ul>
                        {dog.facts.map( n => <li>{n}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};
