export function getPagesNumbs(center: number, end: number): number[] {
  let start: number = Math.max(1, +center - 2) // Начало диапазона
  let finish: number = Math.min(end, +center + 2) // Конец диапазона

  // Если размер диапазона меньше 5 чисел, то корректируем start и finish
  if (end > 5) {
    while (finish - start + 1 < 5) {
      if (start > 1) {
        start--
      } else {
        finish++
      }
    }
  }

  // Создаем массив от start до finish
  const range: number[] = []
  for (let i = start; i <= finish; i++) {
    range.push(i)
  }

  return range
}
