import Layout from '../../../components/Layout'
import { NextPage } from 'next';
import { api } from '../../../interfaces';
import { SideNav } from '../../../components/SideNav/SideNav';
import { ServiceContent } from '../../../components/ServiceContent/ServiceContent';
import { ServiceWrapper } from '../../../components/ServiceWrapper/ServiceWrapper';

const Product: NextPage<api> = ({ name, accordion, nameList, src, id, description, minPrice }) => {
    if (typeof name === 'undefined') {
        return <h1> Error </h1>
    }
    return (
        <Layout title="Express Imprimerie Services">
            <ServiceWrapper>
                <SideNav nameList={nameList} />
                <ServiceContent
                    accordionArray={accordion}
                    name={name}
                    src={src}
                    id={id}
                    minPrice={minPrice}
                    description={description}
                />
            </ServiceWrapper>
        </Layout>
    )
}
Product.getInitialProps = async ({ query }) => {
    const res = await fetch(`http://localhost:3000/api/product/${query.id}`);
    const post = await res.json();
    return post;

}

export default Product
