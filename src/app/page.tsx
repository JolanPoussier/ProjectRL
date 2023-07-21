import Link from "next/link";
import style from "./page.module.scss";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
    return (
    <div className={style.main}>
      {/* <h1>Hello, Home page!</h1>
      <Link href={'/category'}>Page catégorie</Link> */}
    </div>
    )
  }