import classes from './SideNav.module.scss'
import { NameList } from '../../interfaces';
import Link from 'next/link';

interface productName {
    nameList: NameList[]
}

export const SideNav: React.FC<productName> = ({ nameList }) => {
    const { sidenav, unordered, btn } = classes;
    return (
        <div className={sidenav}>
            <h1>Produits: </h1>
            <ul className={unordered}>{nameList.map(ex => {
                let url = `/services/${ex.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                return (
                    <Link
                        key={ex.id}
                        to={url}
                        href={url}>
                        <li className={btn}>{ex.name}</li>
                    </Link>)
            }
            )}</ul>
        </div>
    );
}