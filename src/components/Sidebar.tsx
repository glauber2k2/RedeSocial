import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (

    <div> 
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1488415032361-b7e238421f1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
    
      <div className={styles.profile}>
        <Avatar src="https://github.com/glauber2k2.png"/>
        
        <strong>Glauber Monteiro</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
    </div>
  )
}