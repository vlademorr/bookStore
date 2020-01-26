import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
            <div className="cssload-triangles">
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <div className="cssload-tri"></div>
                <div className="cssload-tri cssload-invert"></div>
                <h4>LOADING</h4>
            </div>
    )
};

export default Spinner;