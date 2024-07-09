import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiAbstract007 } from "react-icons/gi";
import SearchBar from './SearchBar';
import '../css/Portfolio.css';

/**
 * Renders the Portfolio component.
 *
 * @return {JSX.Element} The rendered Portfolio component.
 */
const Portfolio = () => {

    const githubAccessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

    // GitHub API
    const [repos, setRepos] = useState([]);
    // Search Filter
    const [filteredRepos, setFilteredRepos] = useState([]);

    // Fetch GitHub repositories when component mounts
    // Empty dependency array ensures this only runs once
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/user/repos', {
                    headers: {
                        Authorization: githubAccessToken
                    }
                });
                setRepos(response.data);
                setFilteredRepos(response.data);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };
        fetchRepos();
    }, [githubAccessToken]);

    // Handle Search function
    const handleSearch = (searchTerm) => {
        const filtered = repos.filter(repo =>
            repo.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRepos(filtered);
    };

    return (
        <div className='portfolio-page'>
            <h2>Creation</h2>
            <SearchBar onSubmit={handleSearch} />
            {repos ? (<Creation repos={filteredRepos} />) : (<p>Please provide your Github token in .env</p>)}
            <br/><br/>
            <h2>Reading List (fork from Github)</h2>
            {repos ? (<Fork repos={filteredRepos} />) : (<p>Please provide your Github token in .env</p>)}
        </div>
    );
};

/**
 * Renders the Creation component based on the provided repositories.
 *
 * @param {Array} repos - The array of repositories to render.
 * @return {JSX.Element} The rendered Creation component.
 */
const Creation = ({ repos }) => {
    return (
        <div className="portfolio-icons">
            {repos.map(repo => (
                !repo.fork && (
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
                        <div className="repo-item">
                            <GiAbstract007 className="icon" />
                            <span className="repo-name">{repo.name}</span>
                        </div>
                    </a>
                )
            ))}
        </div>
    );
};

/**
 * Renders a list of forked repositories as clickable links.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.repos - An array of repository objects.
 * @return {JSX.Element} A div containing a list of forked repositories.
 */
const Fork = ({ repos }) => {
    return (
        <div className="portfolio-icons">
            {repos.map(repo => (
                repo.fork && (
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
                        <div className="repo-item">
                            <GiAbstract007 className="icon" />
                            <span className="repo-name">{repo.name}</span>
                        </div>
                    </a>
                )
            ))}
        </div>
    )
}

export default Portfolio;
