import { useState } from 'react'
import './App.css'

var arr = new Array();

function App() {
  const [task, SetTask] = useState([])


  return (
    <div className="App">
      <div className='container'>
        <div className='first'>
          <h2>Tarefa:</h2>
          <input type="text" placeholder="nome da tarefa..." id="name" />
          <h2>Data:</h2>
          <input type="date" id="date" />
        </div>


        <div>
          <button className="button" onClick={() => {
            var nameValue = document.querySelector("#name").value
            var dateValue = document.querySelector("#date").value

            dateValue = dateValue.replace(/-/g, "/")

            arr.push({ id: arr.length, name: nameValue, data: dateValue });
            SetTask(new Array(arr));
          }}>Enviar</button>
        </div>

        <hr></hr><br></br>
        <ul>
          {(task.length > 0) ? task[0].map((t) => (
            <li className='listtask' key={t.id}>
              <p>
                Nome: {t.name}<br></br>Data: {t.data}
              </p>
              <button className='delet' onClick={() => {
                debugger
                arr.splice(arr.filter(p => p.id == t.id), 1)
                SetTask(new Array(arr));
              }}>X</button>
            </li>
          )) : (<li className='nonetask'>Nenhuma tarefa</li>)
          }
        </ul>

      </div>
    </div >
  )
}

export default App
