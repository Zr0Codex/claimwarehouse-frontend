import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NoMatch = () => (
    <div style={{marginTop: 70}}>
        <h1>Page not found  404</h1>
        <Link to="/home" >Back_To_Home</Link>
    </div>
)

export default NoMatch
