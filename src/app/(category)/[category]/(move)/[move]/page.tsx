'use client'
import Link from "next/link";
import style from "./page.module.scss";

export default function Page({ params }: { params: { category: string } }) {
    return (
      <div className={style.main}>
        <h1>Hello, move page!</h1>
        <Link href="/">Home<br /></Link>
        <Link href="/category">Back<br /></Link>
        <p>{params.category}<br /></p>
      </div>
      )
  }
