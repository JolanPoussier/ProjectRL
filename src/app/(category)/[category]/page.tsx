import Link from "next/link";
import Moves from "../../../assets/datas/moves.tsx";
import styles from "./page.module.scss";
import CategoryCard from "@/components/categoryCard/categoryCard";

export default function Page({ params }: { params: { category: string } }) {
    return (
      <div className={styles.main}>
        <div className={styles.cardsContainer}>
          {Moves.map((move) => 
            <CategoryCard {...move}/>
          )}
        </div>
      </div>
    )
  }      