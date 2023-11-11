import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


function App() {
  const course = "Half stack app dev";
  const part1 = {
    name: "React Fundamentals",
    exercises: 10,
  }

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  }

  const part3 = {
    name: "State of a component",
    exercises: 14,
  }
    
 
  return (
    <div className="App">

      <h1>{course}</h1>

      <div className='userCard'>
        <img
          src={user.imageUrl}
          alt={"photo of " + user.name} 
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
          />
        <h2>{user.name}</h2>
      </div>

      <ul>
        <li>{part1.name}</li> 
        <li>{part1.exercises}</li>
      </ul>

      <ol>
        <li>{part2.name}</li>
        <li>{part2.exercises}</li>
      </ol>

      <ul>
        <li>{part3.name}</li>
        <li>{part3.exercises}</li>
      </ul>

    </div>
    
  );
}

export default App;
