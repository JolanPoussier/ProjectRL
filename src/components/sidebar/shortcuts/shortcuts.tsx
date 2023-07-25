import Link from "next/link";
import style from "./page.module.scss";
import moves from "@/utils/datas/moves";

export default function Shortcuts ({displayFunc}: {displayFunc?: Function}) {

    const handleClick = () => {
        if(displayFunc){
            displayFunc();
        }
    }  

    return (
        <div className={style.main}>
            <div className={style.container}>
                {moves.map((move) => (
                    <Link onClick={ displayFunc ? handleClick : undefined} key={move.id} href={`/${move.category}/${move.slug}`} className={style.move}>{move.title}</Link>
                ))}
            </div>
        </div>
    )
}