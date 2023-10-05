'use client'

import style from './moveCard.module.scss'
import Image from 'next/image'
import controller from '@/assets/icons/controller.png'
import controllerLarge from '@/assets/icons/controllerLarge.png'
import closeButton from '@/assets/icons/closeButton.png'
import rotationIcon from '@/assets/icons/rotation.png'
import { useState } from 'react'

export default function ControllerModal() {
  const [displayModal, setDisplayModal] = useState(false)
  return (
    <>
      <div
        className={displayModal ? style.controllerModalOn : style.controllerModal}
        onClick={() => setDisplayModal(false)}
      >
        <Image className={style.modalCloseButton} src={closeButton} alt="close button" width={40} height={40} />
        <Image className={style.modalRotateIcon} src={rotationIcon} alt="rotation icon" width={60} height={60} />
      </div>
      <Image
        className={displayModal ? style.controllerDisplayOn : style.controllerDisplay}
        src={controllerLarge}
        alt="Controller with disposition of abilities"
        width={700}
        height={300}
      />
      <button className={style.controllerButton} onClick={() => setDisplayModal(true)}>
        <Image src={controller} alt="controller icon" width={70} height={50} />
      </button>
    </>
  )
}
