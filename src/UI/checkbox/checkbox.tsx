export default function Checkbox({
  classMain,
  classInput,
  checked,
  changeFunction,
}: {
  classMain: string
  classInput: string
  checked: boolean
  changeFunction: () => void
}) {
  const handleChange = () => {
    changeFunction()
  }

  return (
    <div className={classMain}>
      <input type="checkbox" className={classInput} checked={checked} onChange={handleChange} />
    </div>
  )
}
