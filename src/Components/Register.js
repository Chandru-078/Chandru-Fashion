import { useState } from "react";
import './Register.css'

const Register = ()=> {
    const [userDetails, setUserDetails] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;  
        const value = event.target.value; 

        setUserDetails(prevDetails => ({
            ...prevDetails, 
            [name]: value    
        }));
    };

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log("User Details:", userDetails);  
    }

    return (
        <div id="signContainer">
            <div id="loginHeading">
                <h4>Join the Elite Fashion Club!</h4>
                <h5>Sign up now and enjoy exclusive discounts, early access to sales, and personalized style tips!</h5>
            </div>
            <div id="loginContents">
                <form onSubmit={handleSubmit}>
                    <label> Email or Username:  
                        <input 
                            type="text" 
                            name="emailOrUsername"  
                            value={userDetails.emailOrUsername || ""} 
                            onChange={handleChange} 
                            placeholder="Enter your email or username"
                            required 
                        />
                    </label>
                    <br />
                    <label> Password:  
                        <input 
                            type="password" 
                            name="password" 
                            value={userDetails.password || ""} 
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required 
                        />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
