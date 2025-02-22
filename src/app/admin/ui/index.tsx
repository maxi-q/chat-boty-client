'use client'

export const RefreshButton = ({onClick}: {onClick:  React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <button onClick={onClick} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors duration-300">
      <span className="animate-spin">↻</span> сбросить кеш
    </button>
  )
}