import styles from './footer.module.scss'
import SocialsSection from './socialsSection'

export default function Footer() {
  return (
    <footer className={styles.main}>
      <span>Jolan POUSSIER © | Tous droits réservés</span>
      <SocialsSection />
    </footer>
  )
}
