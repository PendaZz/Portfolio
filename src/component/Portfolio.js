import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GiAbstract007 } from "react-icons/gi";
import SearchBar from './SearchBar';
import '../css/Portfolio.css';

const Portfolio = () => {

    const githubAccessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

    // GitHub API
    const [repos, setRepos] = useState([]);
    // Search Filter
    const [filteredRepos, setFilteredRepos] = useState([]);

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
    }, []);

    // Handle Search function
    const handleSearch = (searchTerm) => {
        const filtered = repos.filter(repo =>
            repo.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRepos(filtered);
    };
    console.log(repos)
    return (
        <div className='portfolio-page'>
            <h2>Creation</h2>
            <SearchBar onSubmit={handleSearch} />
            <Creation repos={filteredRepos} />
            <br/><br/>
            <h2>Reading List (fork from Github)</h2>
            <Fork repos={filteredRepos} />
        </div>
    );
};

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
