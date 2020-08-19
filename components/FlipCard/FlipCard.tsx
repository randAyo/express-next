import React from 'react'
import classes from './FlipCard.module.scss'
import { EmailPhoneDirection } from '../EmailPhoneDirection/EmailPhoneDirection';
import NavigationIcon from '@material-ui/icons/Navigation';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

interface FlipCardProps {
    name: string
    className: string
}
const { flipCard, flipCardInner, flipCardFront, flipCardBack, contactIcons } = classes;

export const FlipCard: React.FC<FlipCardProps> = ({ name, className }) => {
    const svgToBeRendered = name === "phone" ? (<PhoneIcon className={contactIcons} />) : name === "direction" ? (<NavigationIcon className={contactIcons} />) : (<EmailIcon className={contactIcons} />)
    return (
        <div className={className}>
            <div className={flipCard}>
                <div className={flipCardInner}>
                    <div className={flipCardFront}>
                        {svgToBeRendered}
                    </div>
                    <div className={flipCardBack}>
                        <EmailPhoneDirection name={name} />
                    </div>
                </div>
            </div>
        </div>
    );
}