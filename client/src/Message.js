import React from 'react';

export default ({ id, body, submission_date, license_plate, handleDelete }) => {
    return (
        <div>
            <li
                href="#"
                className="list-group-item list-group-item-action pb-3"
            >
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-2 text-justify">{license_plate}</h5>
                    <button
                        onClick={() => {
                            handleDelete(id);
                        }}
                        type="button"
                        className="close"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <p className="mb-1">{body}</p>
                <small className="float-right">{submission_date}</small>
            </li>
        </div>
    );
};
