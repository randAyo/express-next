import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import Offering from '../components/Offering/Offering'
import Contact from '../components/Contact/Contact'
// import dynamic from 'next/dynamic';
// import LazyLoader from '../components/LazyLoader/LazyLoader';


// const About = dynamic(() => import('../components/About/About'),
//   { loading: () => <LazyLoader /> });
// const Offering = dynamic(() => import('../components/Offering/Offering'),
//   { loading: () => <LazyLoader /> });
// const Contact = dynamic(() => import('../components/Contact/Contact'),
//   { loading: () => <LazyLoader /> });
// const Products = dynamic(() => import('../components/Products/Products'),
//   { loading: () => <LazyLoader /> });
// const Hero = dynamic(() => import('../components/Hero/Hero'),
//   { loading: () => <LazyLoader /> })



const IndexPage = () => (
  <Layout title="Express Imprimerie">
    <Hero />
    <About />
    <Products />
    <Offering />
    <Contact />
  </Layout>
)

export default IndexPage
