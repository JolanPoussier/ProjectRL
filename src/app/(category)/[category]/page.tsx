import Moves from "../../../assets/datas/moves.ts";
import styles from "./page.module.scss";
import CategoryCard from "@/components/categoryCard/categoryCard";

export default function Page({ params }: { params: { category: string } }) {

    let movesToShow = [];
    movesToShow = Moves.filter(move => move.category === params.category)

    return (
      <div className={styles.main}>
        <div className={styles.cardsContainer}>
          {movesToShow.map((move) => 
            <CategoryCard {...move} key={move.slug} />
          )}
        </div>
      </div>
    )
  }