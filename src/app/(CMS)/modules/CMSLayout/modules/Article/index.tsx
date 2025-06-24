export function Article({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <article className='prose max-w-full mx-auto w-max flex-1'>{children}</article>
}

