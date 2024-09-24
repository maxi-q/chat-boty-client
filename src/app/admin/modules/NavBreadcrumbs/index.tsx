import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NavBreadcrumbs = () => {
  const currentPath = usePathname()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const pathArray = currentPath.split('/').filter((segment) => segment)

  return (
    <nav className="ms-5 flex items-center text-gray-700">
      {pathArray.map((segment, index) => {
        const href = '/' + pathArray.slice(0, index + 1).join('/')
        const isLast = index === pathArray.length - 1

        return (
          <span key={href} className="flex items-center">
            {!isLast ? (
              <Link href={href} className="text-blue-500 hover:underline capitalize flex items-center h-full">
                {segment}
              </Link>
            ) : (
              <span className="text-gray-500 capitalize flex items-center h-full">{segment}</span>
            )}
            {index < pathArray.length - 1 && <span className="mx-1">/</span>}
          </span>
        )
      })}
    </nav>
  )
}

export default NavBreadcrumbs
