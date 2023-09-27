import minimalizeText from '@/utils/minimalizeText'
import style from './searchBar.module.scss'
import Link from 'next/link'
import useMovesByInputSearch from '@/services/moves/movesByInputSearch'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  const category = pathname.split('/')[1]
  const movesToShow = useMovesByInputSearch(minimalizeText(searchInput), category)

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
