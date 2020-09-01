import Layout from '../components/Layout'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Products from '../components/Products/Products'
import Offering from '../components/Offering/Offering'
import Contact from '../components/Contact/Contact'

// import loadable from '@loadable/component'
// import LazyLoader from '../components/LazyLoader/LazyLoader';
// const About = loadable(() => import('../components/About/About'), <LazyLoader />);
// const Offering = loadable(() => import('../components/Offering/Offering'), <LazyLoader />);
// const Contact = loadable(() => import('../components/Contact/Contact'), <LazyLoader />);
// const Products = loadable(() => import('../components/Products/Products'), <LazyLoader />);
// const Hero = loadable(()=>import('../components/Hero/Hero') )



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
