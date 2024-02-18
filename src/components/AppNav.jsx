import styles from "./AppNav.module.css"
function AppNav() {
  console.log(styles);
  return (
   <nav className={styles.nav}>AppNavigation</nav>
  )
}

export default AppNav
