import React, { useState } from 'react';
import { Modal, IconButton, Typography, Box } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import "../css/Section.css";

/**
 * Renders a section with a title, content, and interactive features.
 *
 * @param {string} title - The title of the section.
 * @param {string} content - The content of the section.
 * @return {JSX.Element} The JSX element representing the section.
 */
const Section = ({ title, content }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='section'>
            <IconButton size='string' color="warning" onClick={handleOpen}>
                <InfoOutlined />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body1">
                        {content}
                    </Typography>
                </Box>
            </Modal>
            <a><br/> { title }  </a>
        </div>
    );
};

export default Section;

