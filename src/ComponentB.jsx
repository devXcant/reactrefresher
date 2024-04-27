import ComponentC from "./ComponentC"


const ComponentB = () => {
  return (
    <div>
        <h1 className="box">Component B</h1>
        <ComponentC />
    </div>
  )
}

export default ComponentB