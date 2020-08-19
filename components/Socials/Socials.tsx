import React from 'react'
import classes from './Socials.module.scss'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

interface SocialsProps {

}

export const Socials: React.FC<SocialsProps> = ({ }) => {
    const { container, ul } = classes;
    return (
        <div className={container}>
            <ul className={ul}>
                <li><a target="blank" href="https://www.instagram.com/express.imprimerie/"><InstagramIcon /></a></li>
                <li><a target="blank" href="https://www.facebook.com/Limprimeur-107384444097355/?ref=bookmarks"><FacebookIcon /></a></li>
                <li><a href="https://wa.me/212663152249"><WhatsAppIcon /></a></li>
            </ul>
        </div>
    );
}