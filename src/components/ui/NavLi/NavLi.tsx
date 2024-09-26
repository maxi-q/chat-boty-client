export const NavLi = ({
  Component,
}: {
  Component: ({
    children,
    active,
    link,
  }: Readonly<{
    children: React.ReactNode
    active: boolean
    link?: string
  }>) => JSX.Element
}) => {
  return (
    <>
      <Component link="#service" active={false}>
        Услуги
      </Component>
      <Component link="/cases" active={false}>
        Кейсы
      </Component>
      <Component link="/blog" active={false}>
        Блог
      </Component>
      <Component link="/contacts" active={false}>
        Контакты
      </Component>
    </>
  )
}
