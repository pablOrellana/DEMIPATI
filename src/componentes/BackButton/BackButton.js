import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './BackButton.css';

export class BackButton extends Component {
    render() {
        return (
            <div id="back-to-home">
                <Link to="/DEMIPATI">
                    <button type="button" className="btn btn-danger">
                        <svg class="bi bi-box-arrow-left" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6.354 13.354a.5.5 0 000-.708L3.707 10l2.647-2.646a.5.5 0 10-.708-.708l-3 3a.5.5 0 000 .708l3 3a.5.5 0 00.708 0z" clip-rule="evenodd"></path>
                            <path fill-rule="evenodd" d="M13.5 10a.5.5 0 00-.5-.5H4a.5.5 0 000 1h9a.5.5 0 00.5-.5z" clip-rule="evenodd"></path>
                            <path fill-rule="evenodd" d="M16 15.5a1.5 1.5 0 001.5-1.5V6A1.5 1.5 0 0016 4.5H9A1.5 1.5 0 007.5 6v1.5a.5.5 0 001 0V6a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5H9a.5.5 0 01-.5-.5v-1.5a.5.5 0 00-1 0V14A1.5 1.5 0 009 15.5h7z" clip-rule="evenodd"></path>
                            </svg>
                    </button>
                </Link>
            </div>
        )
    }
}

export default BackButton
