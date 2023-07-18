import Image from "next/image";
import style from "./page.module.scss";
import stars from "src/assets/star/Design sans titre.png"; 

export default function difficulty() {

    return (
        <div className={style.main}>
            <Image alt="étoile violette" src={stars} />
        </div>
    )
}
