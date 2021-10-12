import { Modal } from '@mui/material';
import Dialog from '@material-ui/core/Dialog'
import React, { useState } from 'react';
import './css/landingpage.css'
import Loadarbutton from './Loadarbutton';
import { Link } from 'react-router-dom';


const Landingpage = () => {
    const [getmodal, setmodal] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const opened = () => {
        setmodal(true)
    }
    const handleClose = () =>{
        setmodal(false)
    }

    return (
        <>
            <div className="maindiv">
                <img src="https://media.istockphoto.com/photos/large-call-center-headquarter-building-with-computers-picture-id1241735705?k=20&m=1241735705&s=612x612&w=0&h=WTnmTlyKb7cyIanscNejgsZGl1BmUd82kvQc9Zk6cO0=" />

                <button onClick={opened}>Click Me </button>
            </div>

            

            {/* {getmodal ? (<h1>Hii</h1>) :null} */}


            <Modal open={getmodal} onClose={handleClose} className="modal">
                <div className="dialog">
                    <img src="https://media.istockphoto.com/photos/large-call-center-headquarter-building-with-computers-picture-id1241735705?k=20&m=1241735705&s=612x612&w=0&h=WTnmTlyKb7cyIanscNejgsZGl1BmUd82kvQc9Zk6cO0=" />

                    <div className="buttons_grp">
                    <Loadarbutton/>
                     
                     <Link to="/statistic" className="btn">
                         <button >Button 2</button>
                     </Link>
                      
                    </div>
                </div>
            </Modal>
        </>
    );
};


export default Landingpage;