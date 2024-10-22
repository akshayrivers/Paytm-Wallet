import axios from "axios";
import { useState, useEffect } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom"
export const Me = () => {
    const [firstName, setFirstName] = useState("");
    const [username, setUsername] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user details when the component mounts
        axios.get('http://localhost:3000/api/v1/user/me', {
            headers: { 
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            setFirstName(response.data.user.firstName); 
            setLastName(response.data.user.lastName); 
            setUsername(response.data.user.username); 
        })
        .catch(error => {
            console.error("Error fetching user details:", error);
        });
    }, []);

    const handleUpdate = () => {
        // Update user details
        axios.put('http://localhost:3000/api/v1/user/update', 
        {
            firstName,
            lastName,
            password
        }, 
        {
            headers: { 
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            navigate("/dashboard")
            alert("Details updated successfully!");
            
        })
        .catch(error => {
            console.error("Error updating details:", error);
        });
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col space-y-4">
                <div className="text-center font-semibold">
                    User Information:
                </div>
                
                <div>Username: {username}</div>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
                
                <div className="text-center font-semibold mt-8">
                    Update details:
                </div>
                
                <div>
                    <InputBox 
                        label="First Name" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} 
                        placeholder={"Updated First Name"} 
                    />
                </div>

                <div>
                    <InputBox 
                        label="Last Name" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} 
                        placeholder={"Updated Last Name"} 
                    />
                </div>

                <div>
                    <InputBox 
                        label="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder={"Updated Password"} 
                    />
                </div>

                <button 
                    className="flex justify-center w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                    onClick={handleUpdate}
                >
                    SUBMIT
                </button>
                
            </div>
        </div>
    );
};