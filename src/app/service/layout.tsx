export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="laptop:mx-[15px] scroll-smooth">{children}</div>
}
