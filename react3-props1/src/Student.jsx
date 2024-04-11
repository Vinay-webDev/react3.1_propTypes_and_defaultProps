import propTypes from 'prop-types'

/* propTypes = the mechanism that ensures
that the passed value is of the correct data 
type.
age: propTypes.number */
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

export default Student
