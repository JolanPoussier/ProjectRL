import image from '@/../public/img/thumbnails/powershot.jpeg'
import { StaticImageData } from 'next/image'

type move = {
  id: number
  title: string
  slug: string
  category: string
  difficulty: number
  description: string
  image: StaticImageData
  text: string
}

const moves: move[] = [
  {
    id: 1,
    title: 'Power Shot',
    slug: 'powershot',
    category: 'tirs',
    difficulty: 1,
    description: 'Un simple tir aussi puissant que possible ',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 2,
    title: 'Wall Shot',
    slug: 'wallshot',
    category: 'tirs',
    difficulty: 1,
    description: 'Un tir puissant depuis le mur',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 3,
    title: 'Redirect',
    slug: 'redirect',
    category: 'tirs',
    difficulty: 2,
    description: "Une déviation d'un tir pour accélérer ou/et cadrer",
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 4,
    title: 'Ceiling Shot',
    slug: 'ceilingshot',
    category: 'tirs',
    difficulty: 3,
    description: 'Un tir depuis le plafond, avec une récupération du flic',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 5,
    title: 'Reverse Shot',
    slug: 'reverseshot',
    category: 'tirs',
    difficulty: 2,
    description: 'Un tir en marche arrière',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 6,
    title: 'Backboard Shot',
    slug: 'backboardshot',
    category: 'tirs',
    difficulty: 2,
    description: 'Un tir depuis la position défensive en backboard',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 7,
    title: 'Kuxir Pinch',
    slug: 'kuxirpinch',
    category: 'tirs',
    difficulty: 3,
    description:
      "Un tir résultant d'un blocage de la balle entre le joueur et un mur avec un angle particulier (voir autres pinch)",
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 8,
    title: 'Teamate Pinch',
    slug: 'teamatepinch',
    category: 'tirs',
    difficulty: 2,
    description: "Un tir résulant d'un blocage de la balle entre deux joueurs",
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 9,
    title: 'Ground pinch',
    slug: 'groundpinch',
    category: 'tirs',
    difficulty: 3,
    description: "Un tir résultant d'un blocage de la balle entre un joueur venant des airs et le sol.",
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 10,
    title: 'Cancel Shot',
    slug: 'cancelshot',
    category: 'tirs',
    difficulty: 2,
    description: "Un tir sur lequel on applique la méchanique de cancel pour éviter d'être emporter",
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 11,
    title: 'Doink',
    slug: 'doink',
    category: 'tirs',
    difficulty: 2,
    description: 'Une redirect avec le toit de sa voiture en faisant un saut',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 12,
    title: 'Flip Reset',
    slug: 'flipreset',
    category: 'aeriennes',
    difficulty: 3,
    description: 'Un tir consistant à prendre le reset du flip en posant ses 4 roues sur le dessous de la voiture',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 13,
    title: 'Double Flip Reset',
    slug: 'doubleflipreset',
    category: 'aeriennes',
    difficulty: 3,
    description: 'Un tir consistant à appliquer deux fois le flip reset ',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
  {
    id: 14,
    title: 'Ground Musty',
    slug: 'groundmusty',
    category: 'sol',
    difficulty: 2,
    description: 'Un tir durant lequel un backflip permettra un envoi rapide de la balle',
    image: image,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quia reprehenderit, odit unde inventore quod fugit tenetur illum veniam qui reiciendis. Ad soluta vero vel officia, itaque qui optio neque.',
  },
]

export default moves
