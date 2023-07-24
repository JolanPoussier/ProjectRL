"use client"

import Image, { StaticImageData } from "next/image";
import style from "./page.module.scss";
import starGenerator from "@/assets/functions/starGenerator";


export default function MoveCard ({ title, text, image, id, difficulty, slug }: { title: string, text: string, image: StaticImageData, id: number, difficulty: number, slug: string}) {
    const star = difficulty;
    
    return (
        <div className={style.card}>
            <div className={style.header}>
                <h3 className={style.title}>{title}</h3>
                <div className={style.stars}>{starGenerator({star})}</div>
            </div>
            <div className={style.imageContainer}>
                <Image className={style.image} alt={`Image du move ${title}`} src={image} width={500} height={500}/>
            </div>
            <p className={style.text}>{text}</p>
        </div>
    )
}