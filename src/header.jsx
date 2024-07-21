import react from 'react'
import './App.css'
//Criando A funçao header generica para poder usar o nome que eu quiser apenas mudando o name no app.jsx
function Header(props){
    return(
        <header className='navbar'>
        <h1 id='title'>{props.name}</h1>
        <ul className='nav'>
          <li>{props.links[0]}</li>
          <li>{props.links[1]}</li>
          <li>{props.links[2]}</li>
        </ul>
       </header>
    )
}
export default Header