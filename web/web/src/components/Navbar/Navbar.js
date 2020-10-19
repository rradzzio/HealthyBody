import React, { Component } from 'react';
import styled from 'styled-components';
import './Navbar.css';
import { config } from '../../utils/config';
import { toggleClass } from './navbarController';

class Navbar extends Component {
    render() {
        return (
            <GlobalStyle>
            <Wrapper>
                    <Hamburger>
                        <div className="hamburger">
                            <div onClick={toggleClass} className="hamburgerTools"></div>
                        </div>
                    </Hamburger>
            </Wrapper>
                    <Menu>
                        <div className="menu">
                            <HeaderLogo>Healthy Body</HeaderLogo>
                            <div className="navbarList">
                                <h1>Zdrowie</h1>
                                <h1>Dieta &amp; Fitness</h1>
                                <h1>Wiadomości</h1>
                                <h1>Kalkulatory</h1>
                                </div>
                            </div>
                    </Menu>
            </GlobalStyle>
        );
    }
}

const Menu = styled.div`

    .menu > .navbarList {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: ${config.fonts.Playfair};
    }

    .menu > .navbarList > h1{
        font-size: 1.5rem;
        margin: 1rem;
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
        background-color: rgba(200,200,200,0.9);
        position: absolute;
        height: 95%;
        width: 100%;
    }

    @media (min-width: 768px) {
        .menu{
            display: flex;
            justify-content: space-around;
            border-bottom: blueviolet 1px solid;
        }

        .menu > .navbarList {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        h1 {
            transition: linear 0.2s all;
        }

        h1:hover:after, h1:hover{
            display: block;
            transform: scale(1.05,1.05)
        }

        h1:after{
            content: '';
            display: none;
            width: 100%;
            height: 0.1rem;
            background-color: black;
            border-radius: 23%;
        }

        .menu > .navbarList > h1 {
            font-size: 1rem;
        }

        #contactH1 {
            font-size: 1rem;
            font-weight: bold;
        }

        .menuToggle {
            display: none;
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
        background-color: black;
        border-radius: 15%;
        transition: all ease 1s;
    }

    .hamburger::before {
        position: absolute;
        content: ' ';
        width: 1.5rem;
        margin-top: 0.5rem;
        height: 0.2rem;
        background-color: black;
        border-radius: 15%;
        transition: all ease 3s;
    }

    .hamburger::after {
        position: absolute;
        content: ' ';
        width: 1.5rem;
        margin-top: 1rem;
        height: 0.2rem;
        background-color: black;
        border-radius: 15%;
        transition: all ease 1s;
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

const HeaderLogo = styled.h2`
    font-family: 'Indie Flower', 'Sansita Swashed', cursive;
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.7rem;
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