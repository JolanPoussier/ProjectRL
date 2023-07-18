'use client'
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
    return (
      <div>
        <h1>Hello, move page!</h1>
        <Link href="/">Home<br /></Link>
        <Link href="/category">Back<br /></Link>
        <p>{params.slug}<br /></p>
      </div>
      )
  }
