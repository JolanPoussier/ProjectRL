"use client"

import { useCheckboxContext } from "@/contexts/CheckboxContext.tsx";
import Moves from "../../../utils/datas/moves.ts";
import styles from "./page.module.scss";
import CategoryCard from "@/components/categoryCard/categoryCard";
import { useEffect } from "react";
import findAllCategories from "@/utils/datas/allCategories.ts";

export default function Page({ params }: { params: { category: string } }) {

  const { checkboxState } = useCheckboxContext();

    let movesToShow = [];
    movesToShow = Moves.filter(move => (move.category === params.category) && (checkboxState[move.difficulty] === true))

    useEffect(() => {
      const test = findAllCategories();
      console.log(test);
    }, [])

    return (
      <div className={styles.main}>
        <div className={styles.cardsContainer}>
          {movesToShow.map((move) => 
            <CategoryCard {...move} key={move.slug} />
          )}
        </div>
        {/* <div>{test}</div> */}
      </div>
    )
  }