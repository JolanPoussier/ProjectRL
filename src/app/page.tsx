import Input from "@/components/sidebar/input/input";
import style from "./page.module.scss";
import MoveBox from "@/components/homeMovesBox/moveBox";
import cat from "@/app/api/findMany/category/categoryTest.ts";


// `app/page.tsx` is the UI for the `/` URL

export default function Page() {
    return (
        <div className={style.main}>
            <h1 className={style.title}>Trouve ta mécanique</h1>
            <div className={style.input}>
                <Input />
            </div>
            <MoveBox />
        </div>        
    )
  }