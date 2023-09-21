import React, { useEffect, useState } from "react";
import "./Confirmation.css"
import { useNavigate } from "react-router-dom";

function Confirmation() {
    const [isLoading, setIsLoading] = useState(false);
    let navigate=useNavigate();

    

    useEffect(() => {
        // Simulate loading delay for the spinner
        const loadingTimeout = setTimeout(() => {
            setIsLoading(true);
        }, 4500); // Adjust the timeout as needed

        return () => clearTimeout(loadingTimeout);
        
    }, []);


    const handleAdminClick = () => {
        navigate("/admin_home");
    };

    const handleCustomerClick = () => {
        navigate("/customer_home")
    };


    return (
        <div className="confi">
        <center>
            <h2 className="chead">Choose User Type</h2>
            {isLoading ? (
                <div>
                    <button className='adminbtn mx-1 my-2' onClick={handleAdminClick}>Admin</button>
                    <button className='custbtn mx-1 my-2' onClick={handleCustomerClick}>Customer</button>
                </div>
            ):(
                <div className="spinner">
                <p className="loading-text"></p>
                <p className="loading">Loading...</p>
                </div>
            )}
            </center>
        </div>
    );
}

export default Confirmation;
