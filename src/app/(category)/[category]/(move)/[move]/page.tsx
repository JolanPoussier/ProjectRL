'use client'

import MoveCard from "@/components/moveCard/moveCard";
import moves from "@/utils/datas/moves";
import style from "./page.module.scss";

export default function Page({ params }: { params: { category: string, move: string } }) {

  let moveToDisplay = moves.filter(moveToFilter => moveToFilter.slug === params.move)

    return (
      <div className={style.main}>
        <MoveCard {...moveToDisplay[0]}/>
      </div>
      )
  }
