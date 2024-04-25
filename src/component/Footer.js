import React, { useEffect, useState } from 'react';
import '../css/Footer.css';

/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The rendered footer component.
 */
const Footer = () => {

    const currentDate = new Date().toLocaleDateString(); // Get today's date
    const [currentTime, setCurrentTime] = useState(''); // Keep track of current time

    useEffect(() => { // Run an interval to update current time every second
        const interval = setInterval(() => {
            const now = new Date(); // Get current time
            const hours = now.getHours().toString().padStart(2, '0'); // Format hours, padded to 2 digits
            const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes, padded to 2 digits
            const seconds = now.getSeconds().toString().padStart(2, '0'); // Format seconds, padded to 2 digits
            const formattedTime = `${hours}:${minutes}:${seconds}`; // Combine into a formatted time string
            setCurrentTime(formattedTime); // Update state with the new time
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval when the component unmounts
    });
    
    return (
        <footer className="footer">
                <div className="row">
                    <div className='left'>
                        CONST Date = {currentDate}
                    </div>
                    <div className='middle'>
                        CONST Time = {currentTime}
                    </div>
                    <div className='right'>
                        <p>©2024 Yaojun Tan. All rights reserved.</p>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
