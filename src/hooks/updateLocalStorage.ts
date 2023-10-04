export default function updateLocalStorage(toStore?: { name: string; value: unknown }, toRead?: string) {
  if (toStore) {
    localStorage.setItem(toStore.name, JSON.stringify(toStore.value))
    console.log(toStore)
  }
  if (toRead) {
    const storedDatas: string = localStorage.getItem(toRead)
    if (storedDatas) {
      return JSON.parse(storedDatas) as Record<number, boolean>
    }
  }
}
