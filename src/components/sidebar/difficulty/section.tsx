import style from "./page.module.scss";
import starGenerator from "@/utils/functions/starGenerator";
import Checkbox from "@/UI/checkbox/checkbox";
import { useCheckboxContext } from "@/contexts/CheckboxContext";


export default function Section ({star, difficulty, ranks, id}: {star: number, difficulty: string, ranks: string, id: number} ) {

    const { checkboxState, setCheckboxState } = useCheckboxContext();

    return (
        <div className={style.section}>
            <Checkbox classMain= {style.checkbox} 
            classInput={style.checkboxInput} 
            checked={checkboxState[id]} 
            id={id} 
            changeFunction={ () => setCheckboxState({...checkboxState, [id]:!checkboxState[id]}) }
            />
            <div className={style.starContainer}>
                {starGenerator({star})}
            </div>
            <div className={style.rankContainer}>
                {difficulty}
                ({ranks})
            </div>
        </div>
    )
}

