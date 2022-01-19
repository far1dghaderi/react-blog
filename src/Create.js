import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("farid");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Create page</h2>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Blog title:</label>
        <input
          type="text"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog title:</label>
        <textarea
          required
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog author:</label>
        <select
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          defaultValue="Farid.gh"
        >
          <option value="Farid.gh">Farid.gh</option>
          <option value="Mrym">Mrym</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
