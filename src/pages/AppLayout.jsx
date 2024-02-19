import Map from "../components/Map"
import AppNav from "../components/AppNav"
import Sidebar from "../components/Sidebar"
import styles from './AppLayout.module.css'
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
    </div>
  )
}

export default AppLayout
