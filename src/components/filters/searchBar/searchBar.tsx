'use client'

import { FormEvent, useState } from 'react'
import style from './searchBar.module.scss'
import searchIcon from '@/assets/icons/searchIcon.png'
import Image from 'next/image'
import SuggestionSide from './suggestionMenu'
import InputText from '@/UI/inputText/input'

export default function SearchBar({
  displayModal,
  submitAction,
  searchInput,
  setSearchInput,
}: {
  displayModal?: () => void
  submitAction?: () => void
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}) {
  const [overlay, setOverlay] = useState(false)

  const handleInputChange = (inputChange: string) => {
    setSearchInput(inputChange)
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
  }

  return (
    <>
      <div
        className={overlay ? style.overlaySearchBar_active : style.overlaySearchBar}
        onClick={() => setOverlay(false)}
      ></div>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={searchInput && overlay ? style.inputDivBorder : style.inputDiv}>
            <InputText
              placeholder="Trouve ta mécanique"
              value={searchInput}
              onChange={handleInputChange}
              onClick={() => setOverlay(true)}
            />
            <button onClick={handleClickToSubmit} className={style.searchIcon}>
              <Image alt="searchIcon" src={searchIcon} width={30} height={30} />
            </button>
          </div>
        </form>
        {searchInput && overlay && (
          <SuggestionSide
            searchInput={searchInput}
            resetInput={setSearchInput}
            displayModal={displayModal}
            setOverlay={setOverlay}
          />
        )}
      </div>
    </>
  )
}
