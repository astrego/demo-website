import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="not-found-container">
        <h2> 404, page not found - <Link to="/">Go Home</Link></h2>
    </div>
);

export default NotFoundPage;