const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <br />
      <br />
      <h3>{title}</h3>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              delete blog
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
