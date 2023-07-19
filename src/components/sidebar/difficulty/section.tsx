import Image from "next/image";
import style from "./page.module.scss";
import starImage from "src/assets/star/star.png"; 


export default function Section ({star, difficulty, ranks}: {star: number, difficulty: string, ranks: string} ) {

    const stars = [];

    for (let index = 0; index < star; index++) {
        stars.push(<Image src={starImage} alt="Etoile" width={30} height={30}/>)
    }

    return (
        <div className={style.section}>
            <div className={style.checkbox}>
                <input
                  type="checkbox"
                  className={style.checkboxInput}
                //   checked={isChecked}
                //   onChange={handleCheckboxChange}
                />
            </div>
            <div className={style.starContainer}>
                {stars}
            </div>
            <div className={style.rankContainer}>
                {difficulty}
                ({ranks})
            </div>
        </div>
    )
}

