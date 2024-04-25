import React, { useEffect, useState } from 'react';
import '../css/Footer.css';

const Footer = () => {
    const currentDate = new Date().toLocaleDateString();

    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            setCurrentTime(formattedTime);
        }, 1000);

        return () => clearInterval(interval);
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
