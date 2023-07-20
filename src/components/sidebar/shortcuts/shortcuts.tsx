import Link from "next/link";
import style from "./page.module.scss";
import moves from "@/assets/datas/moves.tsx";

export default function Shortcuts () {
    return (
        <div className={style.main}>
            <div className={style.container}>
                {moves.map((move) => (
                    <Link key={move.id} href={`/${move.category}/${move.slug}`} className={style.move}>{move.title}</Link>
                ))}
            </div>
        </div>
    )
}