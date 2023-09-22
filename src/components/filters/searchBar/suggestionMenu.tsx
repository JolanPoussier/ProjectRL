import minimalizeText from '@/utils/minimalizeText'
import style from './searchBar.module.scss'
// import moves from '@/services/moves/movesFakeDatas'
import Link from 'next/link'
import useMovesByInputSearch from '@/services/moves/movesByInputSearch'

export default function SuggestionSide({
  searchInput,
  resetInput,
  displayModal,
  setOverlay,
}: {
  searchInput: string
  resetInput: (input: string) => void
  displayModal?: () => void
  setOverlay: (appear: boolean) => void
}) {
  const movesToShow = useMovesByInputSearch(minimalizeText(searchInput))

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
            href={`/${move.category.name}/${move.slug}`}
          >
            <li className={style.suggestionItems}>{move.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
