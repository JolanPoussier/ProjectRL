import Link from 'next/link'
import styles from './footer.module.scss'
import { Github, Linkedin } from 'lucide-react'

export default function SocialsSection() {
  return (
    <div className={styles.mainSocials}>
      <Link className={styles.link} target="_blank" href={'https://github.com/JolanPoussier'}>
        <Github strokeWidth={1.2} />
      </Link>
      <Link className={styles.link} target="_blank" href={'https://www.linkedin.com/in/jolan-poussier/'}>
        <Linkedin strokeWidth={1.2} />
      </Link>
    </div>
  )
}
