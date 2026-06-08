import React, { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState({});
  const [list, setList] = useState([]);
  const [error, setError] = useState({});
  const [editId, setEditId] = useState(null);

  const [language] = useState([
    "English",
    "Hindi",
    "Gujrati",
    "Spanish",
  ]);

  const [category] = useState([
    "Fiction",
    "Non-Fiction",
    "Education",
    "Programming",
    "Business",
    "Self Help",
    "Biography",
    "Comics",
  ]);

  useEffect(() => {
    const oldData = JSON.parse(
      localStorage.getItem("books")
    );

    if (oldData) {
      setList(oldData);
    }
  }, []);

  const validation = () => {
    let error = {};

    if (!books.title)
      error.title = "Title is Required";

    if (!books.author)
      error.author = "Author is Required";

    if (!books.price)
      error.price = "Price is Required";

    if (!books.category)
      error.category = "Category is Required";

    if (!books.language)
      error.language = "Language is Required";

    setError(error);

    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) return;

    if (editId) {
      const data = list.map((value) => {
        if (value.id === editId) {
          return {
            ...books,
            id: editId,
          };
        }

        return value;
      });

      setList(data);

      localStorage.setItem(
        "books",
        JSON.stringify(data)
      );

      setEditId(null);
    } else {
      const newList = [
        ...list,
        {
          ...books,
          id: Date.now(),
        },
      ];

      setList(newList);

      localStorage.setItem(
        "books",
        JSON.stringify(newList)
      );
    }

    setBooks({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBooks({
      ...books,
      [name]: value,
    });
  };

  const handleDelete = (id) => {
    const newList = list.filter(
      (value) => value.id !== id
    );

    setList(newList);

    localStorage.setItem(
      "books",
      JSON.stringify(newList)
    );
  };

  const handleEdit = (id) => {
    const data = list.find(
      (value) => value.id === id
    );

    setBooks(data);

    setEditId(id);
  };

  return (
    <>
    <div className="container py-5">
  <div className="row justify-content-center">
    
    {/* Form Section */}
    <div className="col-lg-6 mb-4">
     <div className="card shadow border-0">
  <div className="card-body">
    <h3 className="text-center text-primary mb-4">
      📚 Book Registration
    </h3>

    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label className="form-label">
          Book Image
        </label>
        <input
          type="url"
          name="imgurl"
          className="form-control"
          value={books.imgurl || ""}
          onChange={handleChange}
          placeholder="Enter image url"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Book Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={books.title || ""}
          onChange={handleChange}
          placeholder="Enter book title"
        />

        {error.title && (
          <small className="text-danger">
            {error.title}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">
          Author
        </label>
        <input
          type="text"
          name="author"
          className="form-control"
          value={books.author || ""}
          onChange={handleChange}
          placeholder="Author name"
        />

        {error.author && (
          <small className="text-danger">
            {error.author}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">
          Price
        </label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={books.price || ""}
          onChange={handleChange}
          placeholder="Book Price"
        />

        {error.price && (
          <small className="text-danger">
            {error.price}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">
          Category
        </label>

        <select
          name="category"
          className="form-select"
          value={books.category || ""}
          onChange={handleChange}
        >
          <option value="">
            Select Category
          </option>

          {category.map((item, index) => (
            <option
              key={index}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {error.category && (
          <small className="text-danger">
            {error.category}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">
          Description
        </label>

        <textarea
          rows="3"
          name="description"
          className="form-control"
          value={books.description || ""}
          onChange={handleChange}
          placeholder="Book Description"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Published Date
        </label>

        <input
          type="date"
          name="publishedAt"
          className="form-control"
          value={books.publishedAt || ""}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Publisher
        </label>

        <input
          type="text"
          name="publisher"
          className="form-control"
          value={books.publisher || ""}
          onChange={handleChange}
          placeholder="Publisher Name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Language
        </label>

        <select
          name="language"
          className="form-select"
          value={books.language || ""}
          onChange={handleChange}
        >
          <option value="">
            Select Language
          </option>

          {language.map((item, index) => (
            <option
              key={index}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

        {error.language && (
          <small className="text-danger">
            {error.language}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">
          Stock Quantity
        </label>

        <input
          type="number"
          name="stock"
          className="form-control"
          value={books.stock || ""}
          onChange={handleChange}
          placeholder="Available Stock"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Discount (%)
        </label>

        <input
          type="number"
          name="discount"
          className="form-control"
          value={books.discount || ""}
          onChange={handleChange}
          placeholder="Discount"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Rating
        </label>

        <input
          type="number"
          min="1"
          max="5"
          step="0.1"
          name="rating"
          className="form-control"
          value={books.rating || ""}
          onChange={handleChange}
          placeholder="Book Rating"
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className={`btn ${
            editId
              ? "btn-warning"
              : "btn-primary"
          }`}
        >
          {editId
            ? "✏ Update Book"
            : "➕ Add Book"}
        </button>
      </div>

    </form>
  </div>
</div>
    </div>

    {/* Table Section */}
<div className="row">
      <div className="col-lg-12">
      <div className="card shadow border-0">
        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="text-success m-0">
              📖 Book List
            </h3>

            <span className="badge bg-primary fs-6">
              Total Books : {list.length}
            </span>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">

              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Language</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {list.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-4 text-muted"
                    >
                      📚 No Books Found
                    </td>
                  </tr>
                ) : (
                  list.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>

                      <td>
                        {item.imgurl ? (
                          <img
                            src={item.imgurl}
                            alt={item.title}
                            width="60"
                            height="80"
                            className="rounded shadow-sm"
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>

                      <td>{item.title}</td>
                      <td>{item.author}</td>
                      <td>₹{item.price}</td>
                      <td>{item.category}</td>
                      <td>{item.language}</td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-warning btn-sm me-2"
                          onClick={() =>
                            handleEdit(item.id)
                          }
                        >
                          ✏ Edit
                        </button>

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            handleDelete(item.id)
                          }
                        >
                          🗑 Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
</div>

  </div>
</div>
    </>
  );
};

export default App;