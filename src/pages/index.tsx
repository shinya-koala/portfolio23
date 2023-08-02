import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <div className={styles.header__title}>
            <p>Shinya Mizutani</p>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__items}>
                <a href="javascript:void(0)">About</a>
              </li>
              <li className={styles.nav__items}>
                <a href="javascript:void(0)">Product</a>
              </li>
              <li className={styles.nav__items}>
                <a href="javascript:void(0)">Skill</a>
              </li>
              <li className={styles.nav__items}>
                <a href="javascript:void(0)">Interest</a>
              </li>
            </ul>
            <a href="#" target="_blank"></a>
          </nav>
        </div>
      </header>
    </div>
  )
}
