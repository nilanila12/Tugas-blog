//@ts-nocheck
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Jumbotron from '../components/jumbotron'
import Article from '../components/article'
import Pagination from '../components/pagination'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Menu from '../data-dummy/menu.json'

export default function Login({props}) {
  return (
<Layout LayoutProps = {props.menu}>
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Login pages
      </h3>
    </div>
    <Sidebar />

  </div>

</Layout>
  )
}
Login.getInitialProps = () => {
  return {
    props : {
      menu : Menu,
    }
  }
}