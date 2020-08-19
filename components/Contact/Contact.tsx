import React from 'react'
import classes from './Contact.module.scss'
import styles from '../FlipCard/FlipCard.module.scss'
import { FlipCard } from '../FlipCard/FlipCard';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
const { phoneItem, emailItem, directionItem } = styles;
const { contactContainer, contactSection,contactInput, contactHeading, contactAside, whyContact, whyContactUl, howContact, howContactUl } = classes;
const FlipCards = (
    <div className={contactInput}>
        <FlipCard
            className={phoneItem}
            name="phone" />
        <FlipCard
            className={emailItem}
            name="email"
        />
        <FlipCard
            className={directionItem}
            name="direction" />
    </div>
)

export const Contact: React.FC = () => {
    return (
        <section className={contactSection}>
            <div className={contactContainer}>
                <h1 className={contactHeading}>Contactez-nous : </h1>
                <aside className={contactAside}>
                    <div className={whyContact}>
                        <h3>Pourquoi voudriez-vous nous contacter?</h3>
                        <ul className={whyContactUl}>
                            <li>acheter un produit</li>
                            <li>demandes de renseignements sur un produit </li>
                            <li>besoin d'une réunion en personne</li>
                            <li>je veux juste dire salut</li>
                        </ul>
                    </div>
                    <div className={howContact}>
                        <h3>Comment nous contacter</h3>
                        <ul className={howContactUl}>
                            <li><a href="https://www.facebook.com/Limprimeur-107384444097355/?ref=bookmarks"> <FacebookIcon /></a></li>
                            <li><a href="https://www.instagram.com/express.imprimerie/"><InstagramIcon /></a></li>
                            <li><a href="https://wa.me/212663152249"><WhatsAppIcon /> </a></li>
                        </ul>
                    </div>
                </aside>
                {FlipCards}
            </div>
        </section>
    );
}