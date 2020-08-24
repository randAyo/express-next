import classes from './SideNav.module.scss'
import { NameList } from '../../interfaces';
import Link from 'next/link';
import { Suspense } from 'react';
import LazyLoader from '../LazyLoader/LazyLoader';

interface productName {
    nameList: NameList[]
}

export const SideNav: React.FC<productName> = ({ nameList }) => {
    const { sidenav, unordered, btn } = classes;
    return (
        <Suspense fallback={<LazyLoader />}>
            <aside className={sidenav}>
                <h1>Produits: </h1>
                <ul className={unordered}>{nameList.map(ex => {
                    let url = `/services/${ex.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                    return (
                        <li key={ex.id} className={btn}>
                            <Link
                                to={url}
                                href={url}>
                                <p>{ex.name}</p>
                            </Link>
                        </li>
                    )
                }
                )}</ul>
            </aside>
        </Suspense>
    );
}