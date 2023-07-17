'use client'
import Link from "next/link";
import { useState } from "react";


export default function Page({ params }: { params: { slug: string } }) {
  const [test, setTest] = useState('2');
    return (
      <div>
        <h1>Hello, move page!</h1>
        <Link href="/">Home<br /></Link>
        <Link href="/category">Back<br /></Link>
        <p>{params.slug}<br /></p>
        <p>{test}<br /></p>
      </div>
      )
  }
