import Layout from '../components/Layout'
import { Hero } from '../components/Hero/Hero'
import { About } from '../components/About/About'
import { Offering } from '../components/Offering/Offering'
import { Contact } from '../components/Contact/Contact'
import { Products } from '../components/Products/Products'

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
