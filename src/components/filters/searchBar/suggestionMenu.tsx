import minimalizeText from '@/utils/minimalizeText'
import style from './searchBar.module.scss'
import moves from '@/services/moves/movesFakeDatas'
import Link from 'next/link'

export default function SuggestionSide({
  searchInput,
  resetInput,
  displayModal,
  setOverlay,
}: {
  searchInput: string
  resetInput: Function
  displayModal?: Function
  setOverlay: Function
}) {
  let movesToShow = []
  movesToShow = moves.filter(
    move =>
      move.category.includes(minimalizeText(searchInput)) ||
      minimalizeText(move.title).includes(minimalizeText(searchInput)),
  )

  function handleClick() {
    resetInput('')
    displayModal ? displayModal() : ''
    setOverlay(false)
  }

  return (
    <div className={style.suggestionSide}>
      <ul className={style.suggestionList}>
        {movesToShow.map(move => (
          <Link
            className={style.suggestionLinks}
            key={move.id}
            onClick={handleClick}
            href={`/${move.category}/${move.slug}`}
          >
            <li className={style.suggestionItems}>{move.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
