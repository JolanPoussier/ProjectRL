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
        className={displayModal ? style.controllerOverlayOn : style.controllerOverlay}
        onClick={() => setDisplayModal(false)}
      >
        <Image className={style.modalCloseButton} src={closeButton} alt="close button" width={40} height={40} />
        <Image
          onClick={() => setDisplayModal(false)}
          className={style.modalRotateIcon}
          src={rotationIcon}
          alt="rotation icon"
          width={60}
          height={60}
        />
      </div>
      <div className={displayModal ? style.controllerDisplayOn : style.controllerDisplay}>
        <Image
          className={style.controllerImage}
          src={controllerLarge}
          alt="Controller with disposition of abilities"
          width={0}
          height={0}
        />
      </div>
      <button className={style.controllerButton} onClick={() => setDisplayModal(true)}>
        <Image src={controller} alt="controller icon" width={70} height={50} />
      </button>
    </>
  )
}
