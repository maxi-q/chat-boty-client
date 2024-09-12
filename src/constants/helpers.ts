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

function logMemoryUsage() {
  setInterval(() => {
    const memoryUsage = process.memoryUsage();
    
    console.log('Memory Usage:');
    console.log(`  RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB`);
    console.log(`  Heap Total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`);
    console.log(`  Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`);
    console.log(`  External: ${Math.round(memoryUsage.external / 1024 / 1024)} MB`);
  }, 1000 * 60);  // Каждую минуту (60 * 1000 миллисекунд)
}

