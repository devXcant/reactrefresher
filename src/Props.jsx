// import PropTypes  from "react"

const Props = (props) => {
  return (
    <>
        <div className="student">
            <p>Name: {props.name}</p>
            <p>{props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No' }</p>
        </div>
    </>
  )
}

// Props.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.boolean
// }

Props.defaultProps ={
    name:"guest",
    age: 0,
    isStudent:false
}
export default Props