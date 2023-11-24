import TutorialCard from './tutorialCard'
import style from './tutorials.module.scss'

export default function Tutorials({
  arrayOfTutos,
}: {
  arrayOfTutos: {
    id: number
    title: string
    author: string
    video: string
    thumbnail: string
    language: string
  }[]
}) {
  console.log
  return (
    <div className={style.main}>
      <h2 className={style.mainTitle}>Tutoriels</h2>
      {arrayOfTutos.map(tuto => (
        <TutorialCard key={tuto.id} {...tuto} />
      ))}
    </div>
  )
}
