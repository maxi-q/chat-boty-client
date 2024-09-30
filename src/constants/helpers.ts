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

export function logMemoryUsage() {
  setInterval(() => {
    const memoryUsage = process.memoryUsage();
    
    console.log('Memory Usage:');
    console.log(`  RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB`);
    console.log(`  Heap Total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`);
    console.log(`  Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`);
    console.log(`  External: ${Math.round(memoryUsage.external / 1024 / 1024)} MB`);
  }, 1000 * 60);  // Каждую минуту (60 * 1000 миллисекунд)
}

export function formatHumanReadableDateTime(dateInput: string | Date): string {
  // Преобразуем входные данные в объект Date, если это строка
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

  // Определяем компоненты даты
  const day = date.getDate();
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Определяем компоненты времени
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Формируем строку: день месяц год, часы:минуты
  return `${day} ${month} ${year}, ${hours}:${minutes}`;
}

export class ServerError extends Response {}

export class CustomError extends Error {
  readonly response: Response

  constructor(msg: string, response: Response) {
    super(msg)
    this.response = response

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomError.prototype)
  }
}

export async function defaultResponseNoJson<T>(errorTitle: string, input: string | URL | globalThis.Request, init?: RequestInit): Promise<T | ServerError> {
  try {
    const response = await fetch(input, init)
    if (!response.ok) {
      const error = new CustomError(`HTTP Error: ${response.status}`, response)
      throw error
    }

    return response
  } catch (error: any) {
    console.log(error, `Error: ${errorTitle}`)
    return error.response
  }
}

export async function defaultResponse<T>(errorTitle: string, input: string | URL | globalThis.Request, init?: RequestInit): Promise<T | ServerError> {
  try {
    const response = await fetch(input, init)

    const data = await response.json()

    if (!response.ok) {
      const error = new CustomError(`HTTP Error: ${response.status}`, response)
      console.log(data || 'nodata')
      throw error
    }

    return data
  } catch (error: any) {
    console.log(error, `Error: ${errorTitle}`)
    return error.response
  }
}