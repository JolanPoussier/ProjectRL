import style from '@/components/filters/searchBar/searchBar.module.scss'

type Props = {
  placeholder?: string
  value?: string
  onChange?: (text: string) => void
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
}

export default function InputText({ placeholder, value, onChange, onClick, onFocus, onBlur }: Props) {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={e => onChange?.(e.target.value)}
      onClick={() => onClick?.()}
      onFocus={() => onFocus?.()}
      onBlur={() => onBlur?.()}
    />
  )
}
