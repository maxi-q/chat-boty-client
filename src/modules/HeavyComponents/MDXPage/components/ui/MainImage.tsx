"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { SOURCE } from "@/constants/static"

type BaseProps = {
  image: string
  width: number
  height: number
  alt?: string
  className?: string
  style?: React.CSSProperties
}

/* --- ИКОНКИ (inline SVG) --- */
const IconZoomIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="7" fill="currentColor" opacity="0.15" />
    <path
      d="M11 7v8M7 11h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5 16.5 21 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const IconZoomOut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="11" cy="11" r="7" fill="currentColor" opacity="0.15" />
    <path
      d="M7 11h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5 16.5 21 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

/* --- ВСПОМОГАТЕЛЬНЫЕ ХЕЛПЕРЫ --- */
function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const original = document.documentElement.style.overflow
    if (locked) document.documentElement.style.overflow = "hidden"
    return () => {
      document.documentElement.style.overflow = original
    }
  }, [locked])
}

const Lightbox = ({
  src,
  alt,
  onClose,
}: {
  src: string
  alt?: string
  onClose: () => void
}) => {
  useBodyScrollLock(true)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  // Порталим в body, чтобы не влияли z-index/overflow родителя
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Кнопка закрытия/уменьшения */}
      <button
        aria-label="Закрыть"
        className="absolute top-4 right-4 text-white/90 hover:text-white transition"
        onClick={onClose}
      >
        <IconZoomOut className="w-10 h-10" />
      </button>

      {/* Само изображение (клик по нему тоже закрывает) */}
      <div className="max-w-[95vw] max-h-[95vh] cursor-zoom-out">
        <Image
          src={src}
          alt={alt ?? ""}
          width={1600}
          height={1200}
          className="max-w-full max-h-[95vh] object-contain select-none"
          onClick={onClose}
          priority
        />
      </div>
    </div>,
    document.body
  )
}

/* --- ОБЩИЙ КОМПОНЕНТ С ЗУМОМ --- */
const ZoomImage = ({ image, width, height, alt, className, style }: BaseProps) => {
  const [open, setOpen] = useState(false)
  const src = `${SOURCE.static_url}${image}?field=slug`

  return (
    <>
      <div
        className="relative inline-block group"
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt ?? `Фото ${image}`}
          width={width}
          height={height}
          loading="lazy"
          className={["my-0 select-none object-contain cursor-zoom-in", className]
            .filter(Boolean)
            .join(" ")}
          style={style}
        />

        {/* Иконка лупы при ховере */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white">
            <IconZoomIn className="w-10 h-10 drop-shadow" />
          </span>
        </div>
      </div>

      {open && <Lightbox src={src} alt={alt ?? `Фото ${image}`} onClose={() => setOpen(false)} />}
    </>
  )
}

/* --- ТВОИ ЭКСПОРТЫ С ПОВЕДЕНИЕМ ЗУМА --- */
export const MainImage = ({ image, width, height }: { image: string; width: number; height: number }) => {
  return (
    <ZoomImage
      image={image}
      width={width}
      height={height}
      alt={`Фото ${image}`}
      className="my-0 select-none"
    />
  )
}

export const CarouselImage = ({ image, width, height }: { image: string; width: number; height: number }) => {
  return (
    <ZoomImage
      image={image}
      width={width}
      height={height}
      alt={`Фото ${image}`}
      className="my-0 select-none max-w-full max-h-full relative object-contain block"
      style={{ backgroundColor: "var(--color-additional-2)", aspectRatio: `${width} / ${height}` }}
    />
  )
}
