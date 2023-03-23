import { Header } from './components/Header' //na importação do component não é nescessario colocar o .jsx ao final do arquivo.
import { Post } from './components/Post'
import { Sidebar } from './components/sidebar';

import styles from './App.module.css'; //para importar o css para a pagina.

import './global.css';

//author: { avatar_url: "", name: "", role: "" }
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://conteudo.imguol.com.br/c/entretenimento/f5/2021/10/15/yasmin-yassine-1634267892600_615x470.jpg',
      name: 'Yasmin',
      role: 'Caster'
    },
 
  content: [
    { type: 'paragraph', content: ' “Tudo é uma fase, fama, din e viagens Ame seu trabalho sem importar o que falem Sonhos não se compram quando somos de verdade” ' },
    { type: 'paragraph', content: 'Xama, aquário' },
    { type: 'link', content: 'Ouvir no Youtube' }
  ],
  publishedAt: new Date('2022-05-03 20:00'),
  },
  
  {
    id: 2,
    author: {
      avatarUrl: 'https://yt3.googleusercontent.com/ytc/AL5GRJXwYOHbkftT5ca423ffes1i6VNmmy4qFwfKAVcbrQ=s900-c-k-c0x00ffffff-no-rj',
      name: 'Cat',
      role: 'Estudante'
    },
 
  content: [
    { type: 'paragraph', content: '"And why dont we rewrite the stars? Changing the world to be ours"' },
    { type: 'paragraph', content: 'Rewrite the Stars by  Zac Efron e Zendaya.' },
    { type: 'link', content: 'Ouvir no Youtube' }
  ],
  publishedAt: new Date('2022-12-10 13:00'),
  },
  
  {
    id: 3,
    author: {
      avatarUrl: 'https://www.motonline.com.br/noticia/wp-content/uploads/2016/11/motocross-maiara-basso-1.jpg',
      name: 'Julia',
      role: 'Pilota de Motocross'
    },
 
  content: [
    { type: 'paragraph', content: '“No futuro... se por algum milagre você achar que é capaz de se apaixonar de novo... se apaixone por mim.”' },
    { type: 'paragraph', content: 'É assim que acaba, Atlas.' },
    { type: 'link', content: 'Comprar livro na Amazon' }
  ],
  publishedAt: new Date('2022-07-14 16:00'),
  },

  {
    id: 4,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/b3/d0/13/b3d013370828b4210ec89f741c933ea6.jpg',
      name: 'Juh',
      role: 'Estudante'
    },
 
  content: [
    { type: 'paragraph', content: ' “And if its right I dont care how long it takes As long as Im with you Ive got a smile on my face Save your tears, itll be okay All I know is youre here with me” ' },
    { type: 'paragraph', content: 'D4vd' },
    { type: 'link', content: 'Ouvir no Youtube' }
  ],
  publishedAt: new Date('2022-05-03 20:00'),
  },

  

];

export function App() { //Uma função pode retornar apenas 1 elemento, porisso é importante embrulhar tudo em uma <div> ou < > um fragment.
  return (
    <div> 
      <Header />
      
      <div className ={styles.wrapper}>
  <Sidebar />
  <main>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
      })}
  </main>
      </div>
    </div>

    )
}

