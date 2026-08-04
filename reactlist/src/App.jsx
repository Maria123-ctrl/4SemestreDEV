import { useEffect, useState } from 'react'
import editIcon from "./assets/edit-icon.svg.svg"
import trashIcon from "./assets/trash-icon.svg.svg"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);
  //Read (Get)
  const getTaks = async () => {
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoin")
      const dataAPI = await APIReturn.data
      console.log(dataAPI)
      // e armazenar os dados no state (tasklist)
      setTasklist(dataAPI)
    } catch (error) {
      alert("Erro ao carregar os dados!");
      console.log(error)
    }
  }
  //Create (Post)
  const createTask = async (e) => {
    //parar|capturar o evento de submit do formulário
    e.preventDefault()
    if (taskValue.trim().length == 0) {
      alert("Preencha o texto da tarefa");
      return false;
    }
    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoin", {
        descricao: taskValue,
      });
      alert("Tarefa cadastrada!")
      getTaks();
    } catch (error) {
      alert("Erro ao cadastrar a tarefa :(")
      console.error("Erro ao criar tarefa:", error);
    }
    // alert("Função cadastrar em desenvolvimento")
    // axios.post("endpoint", {descricao : taskValue})
  }
  //Update (Put)
  const putTaks = async (taskItem) => {
    setTaskValue(taskItem.descricao)
    setEditMode(true)
    setIdToEdit(taskItem.id)
  }
  const confirmPutTask = () => {
    // validar o form
    if (taskValue.trim().length == 0) {
      alert("Preencha a tarefa corretamente")
      return false
    }

    try {
      axios.put(`http://localhost:3000/taskpoin/${idToEdit}`, {
        descricao: taskValue,
      })
      alert("A tarefa foi editada!!")

      getTaks()

      setEditMode(false)
      setIdToEdit(0)
      setTaskValue("")
    } catch (error) {
      alert("Erro ao editar a tarefa")
    }
  }
  // Delete (Delete)
  const deleteTask = async (taskItem) => {

    const querApagar = confirm(`Quer mesmo apagar migo(a)': ${taskItem.descricao}'`)

    if (!querApagar) return false

    try {
      const APIReturn = await axios.delete(`http://localhost:3000/taskpoin/${taskItem.id}`)

      getTaks()
    }
    catch (erro) {
      alert("Eita, reve isso ai que deu erro miga(o)")
    }
  }
  // roda na montagem do componente - ciclo de vida dos componentes React
  useEffect(() => {
    getTaks()
  }, [])

  return (
    <>
    {console.log(editMode)}
      <header className='header-section'>
        <h1 className='header-section__title'> React List</h1>
      </header>
      <main className='body-section'>
        <form className="cad-task" onSubmit={editMode ?  confirmPutTask : createTask}>
          <input type="text" className="cad-task__entry" placeholder='Adicione uma tarefa' value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
          />
          <p>State: {taskValue}</p>
          <p>Id pra editar: {idToEdit}</p>
          <button className='cad-task__btn-confirm'>{editMode ? "Editar" : "Adicionar"}</button>
          {editMode && (
            <button className='cad-task__btn-confirm' type='button' onClick={() => {
              setEditMode(false)
              setIdToEdit(0)
              setTaskValue("")
            }}>Cancelar</button>
          )}
        </form>

        <section className='cardlist'>
          {
            tasklist.map(task => {
              return (
                <article className='cardtask' key={task.id}>
                  <p className='cardtask__task-text'>{task.descricao}</p>
                  <div className='cardtask__icon-box'>
                    <div className='cardlist__icon'>
                      <img src={editIcon} alt="Imagem de uma caneta - ação editar tarefa" onClick={() => {
                        putTaks(task)
                      }} />
                    </div>
                    <div className='cardlist__icon'>
                      <img src={trashIcon} alt="Imagem de uma lixeira - ação excluir tarefa" onClick={() => {
                        deleteTask(task)
                      }} />
                    </div>
                  </div>
                </article>
              )
            })
          }




        </section>
      </main>

      <footer className='footer-section'>

        <p className='footer-section__right-text'>2026 React List - Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
