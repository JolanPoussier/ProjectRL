export default function Checkbox ({classMain, classInput, checked, changeFunction, id }: {classMain: string, classInput: string, checked: boolean, changeFunction: Function, id: number }) {

    const handleChange = () => {
            changeFunction();
            };

    return (
        <div className={classMain}>
            <input
              type="checkbox"
              className={classInput}
              checked={checked}
              onChange={handleChange}
            />
        </div>
    )
}