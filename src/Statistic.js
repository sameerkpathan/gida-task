import { Link } from 'react-router-dom';
import React from 'react';

function Statistic() {
    return (
        <div className="graph_img">
            <img src="https://cdn-skill.splashmath.com/panel-uploads/GlossaryTerm/0053540d59ee4824b70187bce47ef0e4/1551236725_Drawing-a-bar-graph-to-represent-the-data.png" alt="image not found"/>
            <div className="back">
             <Link to="/">
                 <h4>Back to homepage</h4>
             </Link>
            </div>
        </div>
    )
}

export default Statistic
