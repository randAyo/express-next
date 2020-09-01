import Layout from '../components/Layout'
import dynamic from 'next/dynamic';


const About = dynamic(() => import('../components/About/About'));
const Offering = dynamic(() => import('../components/Offering/Offering'));
const Contact = dynamic(() => import('../components/Contact/Contact'));
const Products = dynamic(() => import('../components/Products/Products'));
const Hero = dynamic(() => import('../components/Hero/Hero'))



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
