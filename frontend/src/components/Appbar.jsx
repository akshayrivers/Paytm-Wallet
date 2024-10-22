import { NavLink, useNavigate } from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate();
    return (
        <div className="shadow-lg h-16 flex justify-between bg-violet-900 text-white">
            {/* Left Side: App Title */}
            <div className="flex items-center h-full ml-6 text-3xl font-bold tracking-wide">
                PAYTM APP
            </div>

            {/* Right Side: Logout and Profile Icon */}
            <div className="flex items-center space-x-4 mr-6">
                {/* Logout Button */}
                <button
                    className="flex shadow-md shadow-red-700 mix-blend-luminosity items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors duration-200"
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/signin");
                    }}
                >
                    Logout
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                        />
                    </svg>
                </button>

                {/* User Profile Icon */}
                <div className="rounded-full h-12 w-12 bg-gray-300 flex items-center justify-center text-xl font-semibold">
                <NavLink to="/me">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 h-8 text-gray-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
