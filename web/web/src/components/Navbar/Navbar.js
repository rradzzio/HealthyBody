import React, { Component } from 'react';
import styled from 'styled-components';
import './Navbar.css';
import { config } from '../../utils/config';
import { toggleClass } from './navbarController';
import { Link } from 'react-router-dom';
const logo = require('../../assets/SVG/logo.svg')

class Navbar extends Component {
    render() {
        return (
            <GlobalStyle className="navbar">
            <Wrapper>
                    <Hamburger>
                        <div className="hamburger">
                            <div onClick={toggleClass} className="hamburgerTools"></div>
                        </div>
                    </Hamburger>
            </Wrapper>
                    <Menu>
                        <div className="menu">
                            <Link to="/"><HeaderLogo src={logo}/>Body Health</Link>
                            <div className="navbarList">
                                <NavLink to="/">Zdrowie</NavLink>
                                <NavLink to="/diet">Dieta &amp; Fitness</NavLink>
                                {/* <NavLink>Wiadomości</NavLink> */}
                                <NavLink to="/calculator">Kalkulatory</NavLink>
                                <NavLink to="/mobile">Mobilna Wersja</NavLink>
                                {/* <a app target="_blank" href="https://github.com/rradzzio/HealthyBody/tree/main/app">Mobilna wersja</a> */}
                                </div>
                            </div>
                    </Menu>
            </GlobalStyle>
        );
    }
}

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    transition: linear 0.4s all;
    margin: 0 1.5rem;
    font-size: ${props => props.app ? '1.3rem' : '1.1rem'};
    font-weight: bold;

        &:hover{
            color: white;
            background: #000523;
            border-radius: -20%;
            
        }
`

const Menu = styled.div`

    a {
        text-decoration: none;
        margin: 0.2rem 2rem;
        color: black;
        transition: linear 0.3s;
    }

    a:hover{
            color: white;
            background: #000523;
            border-radius: -20%;
            
        }

    .menu > .navbarList {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: ${config.fonts.Playfair};
        color: white;
    }

    .menu > .navbarList > h1{
        font-size: 1.5rem;
        margin: 1rem;
        color: white;
    }

    #contactH1 {
        font-size: 2rem;
        font-weight: bold;
    }

    .menu {
        display: none;
    }

    .menuToggle {
        display: block;
        z-index: 100;
        background: rgba(0,0,0, 0.3);
        position: absolute;
        height: 95%;
        width: 100%;
    }

    @media (min-width: 768px) {
        .menu{
            display: flex;
            font-size: 1.5rem;
            justify-content: space-between;
            align-items: center;
            /* border-bottom: blueviolet 1px solid; */
        }

        .menu > .navbarList {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }


        .menu > .navbarList > h1 {
            font-size: 1rem;
        }

        .menuToggle {
            display: none;
        }

        img { 
            height: 2.5rem;
            width: 2rem;
            margin: 0 1rem;
        }
    }
`

const Hamburger = styled.div`
    /* @media (min-width: 768px) {
        display: none;
    } */

    .hamburgerTools {
        position: absolute;
        height: 2rem;
        top: 1px;
        width: 100%;
        cursor: pointer;
    }

    .hamburger {
        display: block;
        position: absolute;
        font-size: 24px;
        right: 5%;
        width: 1.5rem;
        height: 0.2rem;
        margin-top: 0.70rem;
        background-color: white;
        border-radius: 15%;
        transition: all ease 1s;
        margin-bottom: 0.70rem;
    }

    .hamburger::before {
        position: absolute;
        content: ' ';
        width: 1.5rem;
        margin-top: 0.5rem;
        height: 0.2rem;
        background-color: white;
        border-radius: 15%;
        transition: all ease 3s;
        margin-bottom: 0.70rem;
    }

    .hamburger::after {
        position: absolute;
        content: ' ';
        width: 1.5rem;
        margin-top: 1rem;
        height: 0.2rem;
        background-color: white;
        border-radius: 15%;
        transition: all ease 1s;
        margin-bottom: 0.70rem;
    }

    .expanded {

        & {
            transform: rotate(45deg);
            margin-top: -0.15rem;
        }
        &::after {
            transform: rotate(-90deg) translateX(1rem);
        }

        &::before {
            display: none;
        }
    }

    @media (min-width: 768px) {
        .hamburger {
            display: none;
        }
    }
`

const HeaderLogo = styled.img`
    /* font-family: 'Indie Flower', 'Sansita Swashed', cursive; */
    /* font-size: 2rem; */
    width: 3rem;
    height: 3rem;

    @media (max-width: 768px) {
        /* font-size: 1.7rem; */
    }
`

const Wrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin: 0rem 0;
    justify-content: center;
    align-items: center;
`

const GlobalStyle = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    `

export default Navbar;