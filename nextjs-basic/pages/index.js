import React from "react";

export default function Home({ posts }) {

  console.log(posts)
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((m, i) => {
          return (
            <li key={i}>{m.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

// Fetch data on each request.pre - render for Server - side Rendering
// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts: posts,
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:8080/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
    revalidate: 20,
  }
}