import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My first blog",
      body: "blah blah blah...",
      author: "Farid",
      id: 1,
    },
    {
      title: "My second blog",
      body: "blah blah blah...",
      author: "Mrym",
      id: 2,
    },
    {
      title: "My third blog",
      body: "blah blah blah...",
      author: "Mrym",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === "Mrym";
        })}
        title="Mario's blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
