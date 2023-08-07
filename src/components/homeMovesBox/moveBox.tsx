import MoveCard from "../moveCard/moveCard";
import moves from "@/utils/datas/moves";
import style from "./moveBox.module.scss"
import Link from "next/link";

export default function MoveBox () {

    const moveToDisplay = moves.slice(0,6);

    return (
        <div className={style.main}>
            <h2 className={style.title}>Les plus consultées</h2>
            <div className={style.container}>
                {moveToDisplay.map((move) => 
                <div key={move.id} className={style.element}>
                    <Link className={style.link} href={`/${move.category}/${move.slug}`} >
                        <MoveCard {...move} text=""/>
                    </Link>
                </div>
                )}
            </div>
        </div>
    )
}