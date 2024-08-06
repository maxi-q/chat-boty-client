export function Article({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <article className='prose max-w-[852px] w-full'>{children}</article>
}

