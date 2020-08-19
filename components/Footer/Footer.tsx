import React from 'react'
import classes from './Footer.module.scss'
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';



export const Footer: React.FC = ({ }) => {
    const { footer, content, aboutUs, socials } = classes;

    return (
        <footer className={footer}>
            <div className={content}>
                <nav className={aboutUs}>
                    <h1>A Propos</h1>
                    <ul>
                        <li><a href="#section-contact"> Contact</a></li>
                        <li> <a href="#section-about">Pourqoui Nous?</a> </li>
                        <li><a href="#section-products"> Products</a></li>
                    </ul>
                </nav>
                <nav className={socials}>
                <h1>Socials</h1>
                    <ul>
                        <li><Link href="https://www.facebook.com/Limprimeur-107384444097355/?ref=bookmarks"><a target="blank" ><FacebookIcon /></a></Link></li>
                        <li><Link href="https://www.instagram.com/express.imprimerie/"><a target="blank"><InstagramIcon /></a></Link></li>
                        <li><Link href="/"><a><EmailIcon /></a></Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}