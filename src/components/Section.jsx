
const Section = ({children, banner}) => {
  return (
    <div className={`${ !banner && "mx-6 my-8"}`}>
      {children}      
    </div>
  )
}

export default Section