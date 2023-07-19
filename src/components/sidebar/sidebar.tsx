import style from "./page.module.scss";
import Difficulty from "./difficulty/difficulty";
import Input from "./input/input";

export default function Sidebar () {
    return (
        <div className={style.main}>
            <Input />
            <Difficulty />
        </div>
    )
}