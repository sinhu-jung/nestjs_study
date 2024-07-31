export default function ProductsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
     <>
        <h2>Inner layout</h2>
        {children}
     </>
    )
  }
  