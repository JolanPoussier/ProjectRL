import Image from "next/image";
import starImage from "src/assets/star/star.png"; 


export default function starGenerator ({star}: {star: number}) {
    const starsArray = [];

    for (let index = 0; index < star; index++) {
        starsArray.push(<Image src={starImage} alt="Etoile" width={30} height={30}/>)
    }

    return starsArray;
}