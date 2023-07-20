import image from "@/assets/img/gameplay1.jpeg";
import { StaticImageData } from "next/image";

type move = {
    id:number,
    title: string,
    slug: string,
    category: string,
    difficulty: number,
    description: string,
    image: StaticImageData,
}

const moves: move[] = [
    {
        id:1,
        title: "Power Shot",
        slug: "powershot",
        category: "tirs",
        difficulty: 1,
        description: "Un simple tir aussi puissant que possible ",
        image: image
    },
    {
        id:2,
        title: "Wall Shot",
        slug: "wallshot",
        category: "tirs",
        difficulty: 1,
        description: "Un tir puissant depuis le mur",
        image: image
    },
    {
        id:3,
        title: "Redirect",
        slug: "redirect",
        category: "tirs",
        difficulty: 2,
        description: "Une déviation d'un tir pour accélérer ou/et cadrer",
        image: image
    },
    {
        id:4,
        title: "Ceiling Shot",
        slug: "ceilingshot",
        category: "tirs",
        difficulty: 3,
        description: "Un tir depuis le plafond, avec une récupération du flic",
        image: image
    },
    {
        id:5,
        title: "Reverse Shot",
        slug: "reverseshot",
        category: "tirs",
        difficulty: 2,
        description: "Un tir en marche arrière",
        image: image
    },
    {
        id:6,
        title: "Backboard Shot",
        slug: "backboardshot",
        category: "tirs",
        difficulty: 2,
        description: "Un tir depuis la position défensive en backboard",
        image: image
    },
    {
        id:7,
        title: "Kuxir Pinch",
        slug: "kuxirpinch",
        category: "tirs",
        difficulty: 3,
        description: "Un tir résultant d'un blocage de la balle entre le joueur et un mur avec un angle particulier (voir autres pinch)",
        image: image
    },
    {
        id:8,
        title: "Teamate Pinch",
        slug: "teamatepinch",
        category: "tirs",
        difficulty: 2,
        description: "Un tir résulant d'un blocage de la balle entre deux joueurs",
        image: image
    },
    {
        id:9,
        title: "Ground pinch",
        slug: "groundpinch",
        category: "tirs",
        difficulty: 3,
        description: "Un tir résultant d'un blocage de la balle entre un joueur venant des airs et le sol.",
        image: image
    },
    {
        id:10,
        title: "Cancel Shot",
        slug: "cancelshot",
        category: "tirs",
        difficulty: 2,
        description: "Un tir sur lequel on applique la méchanique de cancel pour éviter d'être emporter",
        image: image
    },
    {
        id:11,
        title: "Doink",
        slug: "doink",
        category: "tirs",
        difficulty: 2,
        description: "Une redirect avec le toit de sa voiture en faisant un saut",
        image: image
    },
    {
        id:12,
        title: "Flip Reset",
        slug: "flipreset",
        category: "aeriennes",
        difficulty: 3,
        description: "Un tir consistant à prendre le reset du flip en posant ses 4 roues sur le dessous de la voiture",
        image: image
    },
    {
        id:13,
        title: "Double Flip Reset",
        slug: "doubleflipreset",
        category: "aeriennes",
        difficulty: 3,
        description: "Un tir consistant à appliquer deux fois le flip reset ",
        image: image
    },
    {
        id:14,
        title: "Ground Musty",
        slug: "groundmusty",
        category: "sol",
        difficulty: 2,
        description: "Un tir durant lequel un backflip permettra un envoi rapide de la balle",
        image: image
    },
]

export default moves;