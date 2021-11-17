import './App.css';

// Import dependencies

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
  }

function App() {

return (
  <div className="App">

    <div className="content-block">
      <img className="avatar" src={employee.profileImg} alt={employee.name} />
      </div>

      <div className="content-block">
        <label className="jumbtron">{employee.name}</label>
      </div>

      <div className="content-block">
        <p className="labels">Location</p>
        <label>{employee.location}</label>
      </div>

      <div className="content-block">
        <p className="labels">BloodGroup</p>
        <label>{employee.bloodGroup}</label>
      </div>


      <div className="content-block">
        <p className="labels">Age</p>
        <label>{employee.age}</label>
      </div>
  </div>
)
};

export default App


    


