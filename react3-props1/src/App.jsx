import Student from './Student.jsx'

function App() {
  

  return (
    <>
      <Student name="dude" age="30" student={true} />
      <Student name="bro" age={25} student={true} />
      <Student name="mate" age={44} student={false} />
      <Student name="homie" age={35} student={false} />
    </>
  )
}

export default App

/* it won't stop the application from running but it will 
give a warning and it's good for debugging **/

