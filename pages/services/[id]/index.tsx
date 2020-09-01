import Layout from '../../../components/Layout'
import { NextPage } from 'next';
import { api, accordion } from '../../../interfaces';
import { server } from '../../../config'
import useWindowDimensions from '../../../hoc/useWindow';
import dynamic from 'next/dynamic'
const SideNav = dynamic(() => import('../../../components/SideNav/SideNav'));
const ServiceContent = dynamic(() => import('../../../components/ServiceContent/ServiceContent'));
const ServiceWrapper = dynamic(() => import('../../../components/ServiceWrapper/ServiceWrapper'));


interface PropsPro extends api {
    accordion: accordion[]
}

const Product: NextPage<PropsPro> = ({ name, accordion, nameList, src, description, minPrice }) => {
    if (typeof name === 'undefined') {
        return <h1> Error </h1>
    }
    if (process.browser) {
        var { width } = useWindowDimensions();

    }
    return (
        <Layout title="Express Imprimerie Services">
            <ServiceWrapper>
                {width > 900 && <SideNav nameList={nameList} />}
                <ServiceContent
                    accordionArray={accordion}
                    name={name}
                    src={src}
                    minPrice={minPrice}
                    description={description}
                />

            </ServiceWrapper>
        </Layout>
    )

}
Product.getInitialProps = async ({ query }) => {
    const res = await fetch(`${server}/api/product/${query.id}`)
    const post = await res.json();
    return post;

}

export default Product;
