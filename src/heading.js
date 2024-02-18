// Navbar.js
import React, { useContext, useEffect } from 'react';
import header from './navbar.png';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from './context/Appcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Heading = () => {
    const { status, setstatus, theme, settheme } = useContext(Appcontext);
    const navigate = useNavigate();

    const toggleDarkMode = () => {
        const newTheme = !theme;
        settheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    const changeStatus = () => {
        setstatus(true);
        toast.warning('signed out ');
    };

    useEffect(() => {
        if (status === false) {
            toast.success('signed in  successfully');
        }
    }, []);

    useEffect(() => {
        // Retrieve theme from local storage on component mount
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme !== null) {
            settheme(JSON.parse(storedTheme));
        }
    }, []); // Only run once on component mount

    return (
        <div>
            <div
                style={{
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '100px',
                    background: theme ? '#D3D3D3' : 'black',
                }}
                className="Navbar"
            >
                <span style={{ background: theme ? '#D3D3D3' : 'rgba(0,0,0,0.56)', margin: '10px' }} className="logo">
                    <img style={{ height: '83px' }} src={header} alt="Logo" />
                </span>

                <ul style={{ display: 'flex', gap: '14px', fontSize: '18px', cursor: 'pointer' }} className="nav-links">
                    {status ? (
                        <li onClick={() => navigate('/signup')}>Sign Up</li>
                    ) : (
                        <li onClick={changeStatus}>Sign out </li>
                    )}
                    <li onClick={() => navigate('/category')}>Interesting Topics</li>
                    <li onClick={() => navigate('/international')}>International News</li>
                </ul>

                <div style={{ display:'flex',
                        gap:'30px', cursor: 'pointer',marginTop:'25px',marginRight:'20px'}}
                >

                    <div   style={{
                        height: '27px',
                        backgroundColor:'grey'
                    }} 
                    className="mode-button"
                    onClick={toggleDarkMode}   > {theme ? 'Dark Mode' : 'Light Mode'}</div>
                    

                    <div>
                    <button  style={{background:'grey',borderRadius:'50%',fontSize:'25px',cursor:'pointer',display:status? 'none':'block'}} >P</button>
                </div>
                </div>
               
            </div>
            <ToastContainer
                style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: '600px',
                    position: 'fixed',
                }}
            />
        </div>
    );
};

export default Heading;

