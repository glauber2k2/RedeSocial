import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react";
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment () {

    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    }); //pq para atualizar o like, depende do valor anterior de like, sendo mais performatico atualizar em arrow function.
  }
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/glauber2k2.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Glauber Monteiro</strong>
              <time title="11 de Maio às 22:45h" dataTime="2022-12-14 08:45:54">Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Excluir">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
      
      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp />
          Curtir <span>{likeCount}</span>
        </button>
      </footer>
      </div>

    
    
    </div>

  )
}