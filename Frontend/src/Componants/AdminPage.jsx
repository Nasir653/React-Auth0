import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminPage = () => {
    const navigate = useNavigate();
    const { logout, isAuthenticated, user } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="admin-container">
            <div className="profile-card">

                <h2>Welcome</h2>
                <img src={user?.picture} alt="User Avatar" className="profile-img" />
                <h2>{user?.nickname || "User"}</h2>
                <p>{user?.email}</p>
                <button
                    className="logout-btn"
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default AdminPage;
