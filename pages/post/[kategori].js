//@ts-nocheck
import Sidebar from '../../components/sidebar'
import Layout from '../../components/layout'
import Menu from '../../data-dummy/menu.json'
import {useRouter} from 'next/router'

export default function Kategori({props}) {
    const router = useRouter()
    const {kategori} = router.query
  return (
<Layout LayoutProps = {props.menu}>
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Halaman Kategori {kategori}
      </h3>
      <from action="">
          <div className="from-group">
              <label htmlFor="">Isikan kata kunci disini</label><br></br>
              <input type="text" className="from-control"/>
          </div>
      </from>
    </div>
    <Sidebar />

  </div>

</Layout>
  )
}
Kategori.getInitialProps = () => {
  return {
    props : {
      menu : Menu,
    }
  }
}