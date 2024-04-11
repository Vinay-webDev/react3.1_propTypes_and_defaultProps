import Student from './Student.jsx'

function App() {
  

  return (
    <>
      <Student />
      <Student name="bro" age={25} student={true} />
      <Student name="mate" age={44} student={false} />
      <Student name="homie"  />
    </>
  )
}

export default App





/* propTypes ==>> it won't stop the application from running but it will 
give a warning and it's good for debugging **/

