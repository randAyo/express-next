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
            <ul className={unordered}>{nameList.map(ex =>
                <Link to={`/services/${ex.name}`} href={`/services/${ex.name}`}>
                    <li className={btn} key={ex.id}>{ex.name}</li>
                </Link>
            )}</ul>
        </div>
    );
}