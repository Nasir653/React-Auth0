import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
    const navigate = useNavigate();
    const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/Admin");
        }
    }, [isAuthenticated, navigate]);

    const handleSendToken = async () => {
        try {
            const token = await getAccessTokenSilently();

            const res = await axios.post("http://localhost:5000/auth/callback", {
                token,
            });

            console.log(res.data);
            alert("Email sent successfully!");
        } catch (error) {
            console.error("Error sending token:", error);
            alert("Failed to send token");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome to AuthApp</h2>
                {!isAuthenticated ? (
                    <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>
                ) : (
                    <button className="send-token-btn" onClick={handleSendToken}>Send Token</button>
                )}
            </div>
        </div>
    );
};

export default Login;
