import classes from './SideNav.module.scss'
import { NameList } from '../../interfaces';
import Link from 'next/link';

interface productName {
    nameList: NameList[]
}

 const SideNav: React.FC<productName> = ({ nameList }) => {
    const { sidenav, unordered, btn } = classes;
    return (
        <aside className={sidenav}>
            <h1>Produits: </h1>
            <ul className={unordered}>{nameList.map(ex => {
                let url = `/services/${ex.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                return (
                    <li key={ex.id} className={btn}>
                        <Link
                            to={url}
                            href={url}>
                            <a>{ex.name}</a>
                        </Link>
                    </li>
                )
            }
            )}</ul>
        </aside>
    );
}
export default SideNav;