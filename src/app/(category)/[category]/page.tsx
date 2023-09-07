"use client"

import { useCheckboxContext } from "@/contexts/CheckboxContext.tsx";
import Moves from "../../../utils/datas/moves.ts";
import styles from "./page.module.scss";
import CategoryCard from "@/components/categoryCard/categoryCard";
import findAllCategories from "@/utils/datas/allCategories.ts";
import { Category } from "@/utils/datas/datasType.ts";
import minimalizeText from "@/utils/functions/minimalizeText.ts";

export default function Page({ params }: { params: { category: string } }) {

  const { checkboxState } = useCheckboxContext();

    let movesToShow: any = [];
    let categories: Category[] = findAllCategories() || [];

    if(categories){
      if(categories.some(category => ((category.name === params.category)))){
        movesToShow = Moves.filter(move => (move.category === params.category) && (checkboxState[move.difficulty] === true))
      } else {
        movesToShow = Moves.filter(move => ((move.category.includes(minimalizeText(params.category))) || (minimalizeText(move.title).includes(minimalizeText(params.category))) && (checkboxState[move.difficulty] === true)))
      }
    }

    return (
      <div className={styles.main}>
        <div className={styles.cardsContainer}>
          {movesToShow.map((move: any) => 
            <CategoryCard {...move} key={move.slug} />
          )}
        </div>
      </div>
    )
  }