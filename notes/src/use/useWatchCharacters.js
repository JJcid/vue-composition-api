import { watch } from "vue"

export function useWatchCharacters (value, maxLength = 100) {
  return watch(value, newValue => {
    if (newValue.length >= maxLength) {
      alert(`Ha alcanzado el número máximo de ${maxLength} caracteres.`)
    }
  })
}