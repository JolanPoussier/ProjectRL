'use client'

import { MoveWithCategory } from '@/services/types'
import style from './mostViewedMoves.module.scss'
import MostViewedMoveCard from './mostViewedMoveCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Carousel({ moves }: { moves: MoveWithCategory[] }) {
  function SampleNextArrow({ onClick }: { onClick: () => void }) {
    return (
      <div className={style.chevronRight} onClick={onClick}>
        <ChevronRight size={45} />
      </div>
    )
  }
  function SamplePreviousArrow({ onClick }: { onClick: () => void }) {
    return (
      <div className={style.chevronLeft} onClick={onClick}>
        <ChevronLeft size={45} />
      </div>
    )
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1600,
    autoplaySpeed: 2800,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow onClick={() => ''} />,
    prevArrow: <SamplePreviousArrow onClick={() => ''} />,
  }
  return (
    <Slider className={style.slider} {...settings}>
      {moves.map(move => (
        <div key={move.id} className={style.element}>
          <MostViewedMoveCard {...move} />
        </div>
      ))}
    </Slider>
  )
}
