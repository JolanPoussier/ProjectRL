import Link from "next/link";
import Moves from "./moves";
import styles from "./page.module.scss";

export default function Page({ params }: { params: { slug: string } }) {
    return (
      <div className={styles.main}>
        <h1 className={styles.mainTitle}>Category</h1>
        <div className={styles.cardsContainer}>
          {Moves.map((move) => 
          <Link key={move.id} href={`/${params.slug}/${move.title}`}>{move.title}<br /></Link>
          )}
        </div>
      </div>
    )
  }      