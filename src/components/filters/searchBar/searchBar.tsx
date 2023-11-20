'use client'

import { FormEvent, useState } from 'react'
import style from './searchBar.module.scss'
import searchIcon from '@/assets/icons/searchIcon.png'
import Image from 'next/image'
import SuggestionSide from './suggestionMenu'
import InputText from '@/UI/inputText/input'
import { useRouter } from 'next/navigation'

export default function SearchBar({
  displayModal,
  submitAction,
  submitRedirection,
}: {
  displayModal?: () => void
  submitAction?: () => void
  submitRedirection?: string
}) {
  const [searchInputHome, setSearchInputHome] = useState<string>('')
  const [overlay, setOverlay] = useState(false)
  const router = useRouter()

  const handleInputChange = (inputChange: string) => {
    setSearchInputHome(inputChange)
    inputChange === '' ? setOverlay(false) : setOverlay(true)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleClickToSubmit()
  }

  const handleClickToSubmit = () => {
    setOverlay(false)
    displayModal ? displayModal() : ''
    submitAction ? submitAction() : ''
    router.push(`${submitRedirection}${searchInputHome}`)
  }

  return (
    <>
      <div
        className={overlay ? style.overlaySearchBar_active : style.overlaySearchBar}
        onClick={() => setOverlay(false)}
      ></div>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={searchInputHome && overlay ? style.inputDivBorder : style.inputDiv}>
            <InputText
              placeholder="Trouve ta mécanique"
              value={searchInputHome}
              onChange={handleInputChange}
              onClick={() => setOverlay(true)}
            />
            <button onClick={handleClickToSubmit} className={style.searchIcon}>
              <Image alt="searchIcon" src={searchIcon} width={30} height={30} />
            </button>
          </div>
        </form>
        {searchInputHome && overlay && (
          <SuggestionSide
            searchInput={searchInputHome}
            resetInput={setSearchInputHome}
            displayModal={displayModal}
            setOverlay={setOverlay}
          />
        )}
      </div>
    </>
  )
}
