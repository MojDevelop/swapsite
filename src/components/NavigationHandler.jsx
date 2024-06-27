// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import '../index.css'
// eslint-disable-next-line react/prop-types
export const NavigationHandler = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const handleIconClick = (url) => {
        setLoading(true);
        setTimeout(() => {
            window.location.href = url;
        }, 1000); // Adjust the delay as needed
    };

    return (
        <>
            {children({ loading, handleIconClick })}
            {loading && (
                <div className="loading-container">
                    <img src="/images/icons8-crypto-airdrop-78.png" className="loading-gear" alt="Loading..." />
                </div>
            )}
        </>
    );
};
