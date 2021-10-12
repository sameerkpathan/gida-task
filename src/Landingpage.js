import { Modal } from '@mui/material';
import React, { useState } from 'react';
import './css/landingpage.css'
import Dialog from '@mui/material/Dialog';

const Landingpage = () => {
    const [getmodal, setmodal] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const opened = () => {
        setmodal(true)
    }

    return (
        <>
            <div className="maindiv">
                <img src="https://media.istockphoto.com/photos/large-call-center-headquarter-building-with-computers-picture-id1241735705?k=20&m=1241735705&s=612x612&w=0&h=WTnmTlyKb7cyIanscNejgsZGl1BmUd82kvQc9Zk6cO0=" />

                <button onClick={opened}>Click Me </button>
            </div>

            

            {/* {getmodal ? (<h1>Hii</h1>) :null} */}


            <Modal open={getmodal} >
                <div className="dialog">
                    <Dialog />
                    <img src="https://media.istockphoto.com/photos/large-call-center-headquarter-building-with-computers-picture-id1241735705?k=20&m=1241735705&s=612x612&w=0&h=WTnmTlyKb7cyIanscNejgsZGl1BmUd82kvQc9Zk6cO0=" />

                    <div className="btn">
                        <button  >Button One</button>
                        <button onClick={()=>{
                           return  <img src="https://image.shutterstock.com/image-vector/stock-market-investment-trading-graph-260nw-1922535035.jpg"/>
                        }}>Button Two</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};


export default Landingpage;