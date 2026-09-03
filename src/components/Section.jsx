
const Section = ({children, banner}) => {
  return (
    <section className={`${ !banner && "mx-6 my-8"}`}>
      {children}      
    </section>
  )
}

export default Section