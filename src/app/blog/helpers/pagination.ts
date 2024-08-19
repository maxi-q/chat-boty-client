export function getPagesNumbs(center: number, end: number): number[] {
  let start: number = Math.max(1, +center - 2) // Начало диапазона
  let finish: number = Math.min(end, +center + 2) // Конец диапазона

  // Создаем массив от start до finish
  const range: number[] = []
  for (let i = start; i <= finish; i++) {
    range.push(i)
  }

  return range
}
