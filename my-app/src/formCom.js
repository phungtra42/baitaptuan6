import React from 'react';
import ReactDOM from 'react-dom/client';

function formComp() {
    return (
        <div class="class-form">
        <label>First</label>
        <input />

        <label>Last</label>
        <input />

        <label>Email</label>
        <input />

        <label>Phone</label>
        <input />

        <label>Location</label>
        <input />

        <button id="button" onclick="onCreate()">Create</button>
      </div>
       
    );
}

export default formComp;