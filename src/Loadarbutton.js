import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

const Loadarbutton = () => {
    const [loading , setLoading ] = useState(false);

    const fetchData = () => {
        setLoading(true);

        setTimeout(() => {
         setLoading(false);
          }, 7000);
    }
    return(
    <>
        <button onClick={fetchData} disabled={loading} className="btn">
        {loading && (
            <CircularProgress/>
          )}
       
          {!loading && <span>Button 1</span>}
        </button>
    </>
    );
}

export default Loadarbutton;