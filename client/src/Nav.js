import React from 'react';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Mobility Belgium
            </a>

            <button className="btn btn-outline-success" type="button">
                Main button
            </button>
            <button
                className="btn btn-warning btn-outline-success push  "
                type="button"
            >
                Sign in
            </button>
        </nav>
    );
};
