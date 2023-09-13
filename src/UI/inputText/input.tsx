'use client'

import style from '@/components/sidebar/searchBar/searchBar.module.scss'

type Props = {
  placeholder?: string
  value?: string
  onChange?: (text: string) => void
  onClick?: () => void
}

export default function InputText({ placeholder, value, onChange, onClick }: Props) {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={e => onChange?.(e.target.value)}
      onClick={() => onClick?.()}
    />
  )
}
