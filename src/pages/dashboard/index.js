import React, { useEffect } from "react";
import { useAuth } from "../../api/services/auth.js";
import { Navigate } from "react-router-dom";
import HodDashboard from "../../components/dashboard/hodDashbaord";

const Dashboard = (props) => {
    const { userExist } = useAuth();

    // Set the page Title for SEO purpose
    useEffect(() => {
        document.title = "Dashboard | Cappagh";
    }, []);

    if (!userExist) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <HodDashboard />
        </>
    );
};

export default Dashboard;
