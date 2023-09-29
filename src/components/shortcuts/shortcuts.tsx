// 'use client'

// import Link from 'next/link'
// import style from './shortcuts.module.scss'
// import moves from '@/services/moves/movesFakeDatas'

// export default function Shortcuts({ displayModal }: { displayModal?: () => void }) {
//   const handleClick = () => {
//     if (displayModal) {
//       displayModal()
//     }
//   }

//   return (
//     <div className={style.main}>
//       <div className={style.container}>
//         {moves.map(move => (
//           <Link
//             onClick={displayModal ? handleClick : undefined}
//             key={move.id}
//             href={`/${move.category}/${move.slug}`}
//             className={style.move}
//           >
//             {move.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }
