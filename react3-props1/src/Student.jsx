import propTypes from 'prop-types'

/* propTypes = the mechanism that ensures
that the passed value is of the correct data 
type.
age: propTypes.number */

/* defaultProps = default values in case they are 
                  not passed from the parent component 
                  name: "Guest", */

                  function Student(props) {
    return(
        <div className="student">
            <p> Name:{props.name} </p>
            <p> Age:{props.age} </p>
            <p> Student:{props.student? "yes":"no"} </p>
        </div>
    );
}
Student.propTypes = {
    name: propTypes.string,
    age:propTypes.number,
    student: propTypes.bool,
}
Student.defaultProps = {
    name: "guest",
    age: 0,
    student: false,
}

export default Student
