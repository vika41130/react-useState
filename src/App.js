import React, { useState } from 'react';
import './App.css';

export default () => {

  const [age, setAge] = useState(21);
  const [name, setName] = useState('Pith');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Name: <input type="text" value={name} onChange={e => setName(e.target.value)}/>
          </p>
          <p>Age: {age}</p>
          <button onClick={()=> {setAge(age + 1)}}>Increment age by one</button>
        </div>
        <h1>
          State = age: {age}, name: {name}
        </h1>
      </header>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">

//         </header>
//       </div>
//     );
//   }
// }

// export default App;
