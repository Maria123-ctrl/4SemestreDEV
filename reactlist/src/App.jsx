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
  //Read (Get)
  const getTaks = async () => {
    try {
      const APIReturn = await axios.get("http://localhost:3000/taskpoin")
      const dataAPI = await APIReturn.data
      console.log(dataAPI)
      // e armazenar os dados no state (tasklist)
      setTasklist(dataAPI)
    } catch (error) {
      
    }
  }
  //Create (Post)
  const createTaks = () => {}
  //Update (Put)
  const putTaks = () => {}
  // Delete (Delete)
  const deleteTaks = () => {}
  // roda na montagem do componente - ciclo de vida dos componentes React
  useEffect(()=>{
    getTaks()
  }, [])

  return (
    <>
    <header className='header-section'>
      <h1 className='header-section__title'> React List</h1>
    </header>
    <main className='body-section'>
      <form className="cad-task">
        <input type="text" className="cad-task__entry" placeholder='Adicione uma tarefa'/>
        <button className='cad-task__btn-confirm'>Adicionar</button>
      </form>

      <section className='cardlist'>
        {
          tasklist.map(task => {
            return (
              <article className='cardtask' key={task.id}>
          <p className='cardtask__task-text'>{task.descricao}</p>
          <div className='cardtask__icon-box'>
            <div className='cardlist__icon'>
              <img src={editIcon} alt="Imagem de uma caneta - ação editar tarefa" />
            </div>
            <div className='cardlist__icon'>
              <img src={trashIcon} alt="Imagem de uma lixeira - ação excluir tarefa" />
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
