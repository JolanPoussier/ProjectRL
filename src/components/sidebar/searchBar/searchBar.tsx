'use client'

import { useState } from 'react'
import style from './searchBar.module.scss'
import searchIcon from '@/assets/icons/searchIcon.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SuggestionSide from './suggestionMenu'
import InputText from '@/ui/inputText/input'

export default function SearchBar({ displayModal }: { displayModal?: Function }) {
  const [inputValue, setInputValue] = useState<any>('')
  const [overlay, setOverlay] = useState(false)
  const router = useRouter()

  const handleInputChange = (inputChange: string) => {
    setInputValue(inputChange)
    inputChange === '' ? setOverlay(false) : setOverlay(true)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    router.push(`/${inputValue}`)
    displayModal ? displayModal() : ''
  }

  return (
    <>
      <div
        className={overlay ? style.overlaySearchBar_active : style.overlaySearchBar}
        onClick={() => setOverlay(false)}
      ></div>
      <div className={style.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={inputValue && overlay ? style.inputDivBorder : style.inputDiv}>
            <InputText
              placeholder="Trouves ta méchanique"
              value={inputValue}
              onChange={handleInputChange}
              onClick={() => setOverlay(true)}
            />
            <button onClick={handleSubmit} className={style.searchIcon}>
              <Image alt="searchIcon" src={searchIcon} width={30} height={30} />
            </button>
          </div>
        </form>
        {inputValue && overlay && (
          <SuggestionSide
            inputValue={inputValue}
            resetInput={setInputValue}
            displayModal={displayModal}
            setOverlay={setOverlay}
          />
        )}
      </div>
    </>
  )
}
