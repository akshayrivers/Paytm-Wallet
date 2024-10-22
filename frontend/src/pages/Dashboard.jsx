import axios from "axios"
import { Appbar } from "../components/AppBar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");

        // If token is not present, prompt login
        if (!token) {
            window.alert("You need to login to send money");
            navigate("/signin");  // Redirect to login page
            return;
        }
    // Fetch balance when the component mounts
    axios.get('http://localhost:3000/api/v1/account/balance', {
        headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        setBalance(response.data.balance); 
        if (response.data.balance === 0) {
            window.alert("Your balance is 0. You cannot send money.");
        }
    })
    .catch(error => {
        console.error("Error fetching balance:", error);
    });
    }, [navigate]);
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value= {balance} />
            <Users />
        </div>
    </div>
}