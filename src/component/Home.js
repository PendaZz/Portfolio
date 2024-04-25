import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import Footer from './Footer';


/**
 * React component for the Home page.
 *
 * @return {JSX.Element} The Home component.
 */
const HomePage = () => {

    // Hook for showing/hiding the text animation on the home page.
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setShowFirst(true);
        }, 1000);

        const timeout2 = setTimeout(() => {
            setShowSecond(true);
        }, 2000);

        const timeout3 = setTimeout(() => {
            setShowThird(true);
        }, 3000);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    return (
        <div className="home-page">
            <div className="hero">
                <h1>
                    <span className={`text-animation ${showFirst ? 'show fadeIn' : ''}`}>Hey There</span>
                </h1>
                <h1>
                    <span className={`text-animation ${showSecond ? 'show fadeIn' : ''}`}>Welcome to My Portfolio</span>
                </h1>
                <h1>
                    <span className={`text-animation ${showThird ? 'show fadeIn' : ''}`}>I'm Penda.Tan</span>
                </h1>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
