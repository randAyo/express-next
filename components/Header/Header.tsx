import React, { useState, useEffect } from 'react'
import classes from './Header.module.scss'
import { Logo } from './Logo';
import Link from 'next/link';
import { DropDown } from '../DropDown/DropDown';
import details from '../../utils/sample-data'
import { CSSTransition } from 'react-transition-group'
interface HeaderProps {
    height: number

}
const Burger = () => (<><div></div><div></div><div></div></>)
const { headerStyle, Nav, navbarContentList, navbarAnchor, dropdown, blue, orange, burger, burgerX } = classes;
export const Header: React.FC<HeaderProps> = ({ height }) => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSmallScreen, setisSmallScreen] = useState(false);
    const [isDropVisible, setisDropVisible] = useState(false);
    //change color on scroll
    useEffect(() => {
        if (height) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (height) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        mediaQuery.addListener(handleMediaQueryChange);

        handleMediaQueryChange(mediaQuery);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }

    }, [])
    const handleMediaQueryChange = (mediaQuery: { matches: any; }) => {
        return (mediaQuery.matches) ? setisSmallScreen(false) : setisSmallScreen(true);
    }
    const headerColorChange = () => {
        const pageHeight = window.pageYOffset;
        if (pageHeight > height) {
            document.getElementsByTagName("header")[0].classList.add(`Header-${blue}`)
            // document.getElementsByClassName("navbar-anchor")[0].style.borderBottom = "2px solid red"
        } else {
            document.getElementsByTagName("header")[0].classList.remove(`Header-${orange}`)
        }
        // const head: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("header");
        // if (pageHeight > height) {
        //     head[0].style.backgroundColor = blue;
        //     // document.getElementsByClassName("navbar-anchor")[0].style.borderBottom = "2px solid red"
        // } else {
        //     head[0].style.backgroundColor = orange;
        //     // document.getElementsByTagName("header")[0].classList.remove(`Header-${color}`)
        // }
    }
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible)
    }
    const toggleDropDown = () => {
        // onOneHover(0)
        setisDropVisible(!isDropVisible);
    }
    const onOneHover = (id: number) => {
        //    console.log('hovred navbar', id)
        const styl = document.querySelector('.bubble') as HTMLDivElement;
        if (id === 0) {
            styl.style.width = '0px';
            styl.style.height = '0px'
        } else {

            const elem = document.querySelectorAll(`.${navbarAnchor}`);
            console.log(elem[id].offsetLeft)
            const firstElem = elem[id].getBoundingClientRect();
            const left = elem[id].offsetLeft;
            styl.style.left = `${left}px`;
            styl.style.width = `${firstElem.width}px`;
            styl.style.height = `${firstElem.height / 4}px`;
        }
    }
    const nameList: string[] = [];
    Object.values(details).map(ex => nameList.push(ex.name));
    return (
        <header className={headerStyle}>
            <Link href="/">
                <a><Logo
                    colors={{ stroke: "#fdfffc", fill: "none" }}
                    width="250"
                    height="60"
                    className="logo-svg"
                /></a>
            </Link>
            <CSSTransition
                in={isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className={Nav}>
                    <ul className={navbarContentList}>
                        <li
                            onMouseEnter={() => isDropVisible ? null : toggleDropDown()}
                            className={dropdown} >
                            <Link href="/services/Sacs%20Publicitaire"><a onMouseOver={() => onOneHover(0)} className={[navbarAnchor].join()}>SERVICES</a></Link>
                            <CSSTransition
                                in={isDropVisible}
                                timeout={350}
                                classNames="DropAnimation"
                                unmountOnExit
                            >
                                <DropDown
                                    toggleDropDown={toggleDropDown}
                                    toggleNav={toggleNav}
                                    content={nameList}
                                />
                            </CSSTransition>
                        </li>
                        <li><a onMouseOver={() => onOneHover(1)} className={navbarAnchor} href="/#section-about">Pourquoi Nous?</a></li>
                        <li><a onMouseOver={() => onOneHover(2)} className={navbarAnchor} href="/#section-contact">Contact</a></li>
                        <div className="bubble"></div>
                    </ul>
                </nav>
            </CSSTransition>
            <div
                onClick={toggleNav}
                className={!isNavVisible ? burger : [burger, burgerX].join(' ')}><Burger /></div>
        </header>
    );
}