import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
          <Link to="/" className="Nav-link">Back to Topics</Link>
        </div>
    );
};

export default Navigation;