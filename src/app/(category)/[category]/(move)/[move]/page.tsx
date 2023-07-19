'use client'
import Link from "next/link";

export default function Page({ params }: { params: { category: string } }) {
    return (
      <div>
        <h1>Hello, move page!</h1>
        <Link href="/">Home<br /></Link>
        <Link href="/category">Back<br /></Link>
        <p>{params.category}<br /></p>
      </div>
      )
  }
