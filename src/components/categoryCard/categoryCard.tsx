"use client"

import Image, { StaticImageData } from "next/image";
import style from "./page.module.scss";
import starGenerator from "@/assets/functions/starGenerator";
import Link from "next/link";

export default function CategoryCard ({ title, category, description, image, id, difficulty, slug }: { title: string, category: string, description: string, image: StaticImageData, id: number, difficulty: number, slug: string}) {
    const star = difficulty;
    
    return (
        <div className={style.card}>
            <Link className={style.link} href={`/${category}/${slug}`} >
                <div className={style.imageContainer}>
                    <Image className={style.image} alt={`Image du move ${title}`} src={image} width={200} height={200}/>
                </div>
                <div className={style.content}>
                    <div className={style.header}>
                        <h3 className={style.title}>{title}</h3>
                        <div className={style.stars}>{starGenerator({star})}</div>
                    </div>
                    <p className={style.description}>{description}</p>
                </div>
            </Link>
        </div>
    )
}