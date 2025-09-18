"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { SOURCE } from "@/constants/static"

import { IconZoomOut } from '@/constants/svg/ZoomOut'
import { IconZoomIn } from '@/constants/svg/ZoomIn'

type BaseProps = {
  image: string
  width: number
  height: number
  alt?: string
  className?: string
  style?: React.CSSProperties
}

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
  width,
  height
}: {
  src: string
  alt?: string
  onClose: () => void
  width: number
  height: number
}) => {
  useBodyScrollLock(true)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        aria-label="Закрыть"
        className="absolute top-4 right-4 text-white/90 hover:text-white transition"
        onClick={onClose}
      >
        <IconZoomOut className="w-10 h-10" />
      </button>

      <div className="max-w-[95vw] max-h-[95vh] cursor-zoom-out">
        <Image
          src={src}
          alt={alt ?? ""}
          width={width < 1600 ? 1600 : width}
          height={height < 1200 ? 1200 : height}
          className="max-w-full max-h-[95vh] object-contain select-none"
          onClick={onClose}
          priority
        />
      </div>
    </div>,
    document.body
  )
}

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

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white">
            <IconZoomIn className="w-10 h-10 drop-shadow" />
          </span>
        </div>
      </div>

      {open && <Lightbox width={width} height={height} src={src} alt={alt ?? `Фото ${image}`} onClose={() => setOpen(false)} />}
    </>
  )
}

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
