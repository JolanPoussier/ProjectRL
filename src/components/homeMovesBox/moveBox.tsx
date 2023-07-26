import MoveCard from "../moveCard/moveCard";
import moves from "@/utils/datas/moves";
import style from "./moveBox.module.scss"

export default function MoveBox () {

    const moveToDisplay = moves.slice(0,6);

    return (
        <div className={style.main}>
            <h2 className={style.title}>Les plus consultées</h2>
            <div className={style.container}>
                {moveToDisplay.map((move) => 
                <div className={style.element}>
                    <MoveCard {...move} text=""/>
                </div>
                )}
            </div>
        </div>
    )
}