import SearchBar from "@/components/sidebar/searchBar/searchBar";
import style from "./page.module.scss";
import MoveBox from "@/components/homeMovesBox/moveBox";

// `app/page.tsx` is the UI for the `/` URL

export default function Page() {
    return (
        <div className={style.main}>
            <h1 className={style.title}>Trouve ta mécanique</h1>
            <div className={style.input}>
                <SearchBar />
            </div>
            <MoveBox />
        </div>        
    )
  }