import { Header } from "./components/Header"; //na importação do component não é nescessario colocar o .jsx ao final do arquivo.
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"; //para importar o css para a pagina.

import "./global.css";

//author: { avatar_url: "", name: "", role: "" }
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/glauber2k2.png",
      name: "Glauber",
      role: "full-stack developer",
    },

    content: [
      {
        type: "paragraph",
        content: '"Ouça conselhos e aceite instruções, e acabará sendo sábio"',
      },
      {
        type: "paragraph",
        content: "Segue o link do meu portfolio",
      },
      { type: "link", content: "Ir para o site." },
    ],
    publishedAt: new Date("2022-12-10 13:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/glauber2k2.png",
      name: "Glauber",
      role: "full-stack developer",
    },

    content: [
      {
        type: "paragraph",
        content: '"Publicando na minha rede social"',
      },
      {
        type: "paragraph",
        content: "Segue o link do meu portfolio",
      },
      { type: "link", content: "Ir para o site." },
    ],
    publishedAt: new Date("2022-12-10 13:00"),
  },
];

export function App() {
  //Uma função pode retornar apenas 1 elemento, porisso é importante embrulhar tudo em uma <div> ou < > um fragment.
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
