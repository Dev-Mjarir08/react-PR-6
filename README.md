# 📚 React PR-6 – Book Management System

A modern Book Management System built using React.js and Vite that allows users to perform complete CRUD (Create, Read, Update, Delete) operations on book records. The application uses Local Storage for data persistence, ensuring that book information remains available even after refreshing the browser.

---

## 🔗 Live Demo

👉 **Live Project:** [Add Your Live Link Here]

Example:
https://react-pr-6.vercel.app

---

## 🎥 Project Explanation

👉 **Project Explanation Video:** [Add Your Video Link Here]

Example:
https://youtu.be/your-video-id

---

## 🚀 Features

* Add New Books
* View All Books
* Edit Existing Books
* Delete Books
* Form Validation
* Local Storage Integration
* Responsive User Interface
* Real-Time Data Updates

---

## 🛠️ Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* Bootstrap 5
* HTML5
* CSS3
* Local Storage

---

## 📂 Project Structure

```bash
react-PR-6/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 📖 Book Details Stored

The application manages the following information:

* Book Image URL
* Book Title
* Author Name
* Price
* Category
* Description
* Published Date
* Publisher Name
* Language
* Stock Quantity

---

## 🔄 CRUD Operations

### ➕ Create

Users can add a new book using the form.

### 📄 Read

All books are displayed dynamically.

### ✏️ Update

Existing records can be modified.

### ❌ Delete

Users can remove books permanently.

---

## 💾 Local Storage Integration

Data is stored using browser Local Storage.
`javascript
localStorage.setItem("books", JSON.stringify(bookList));
```

Retrieve data:

const data = JSON.parse(localStorage.getItem("books"));
```

This ensures records remain available even after refreshing the browser.

---

## ⚙️ Installation

### Clone Repository

git clone https://github.com/Dev-Mjarir08/react-PR-6.git
```

### Move to Project Folder

cd react-PR-6
```

### Install Dependencies

npm install
```

### Run Development Server

npm run dev
```

### Open Browser

http://localhost:5173
```

---

## 🎯 Learning Outcomes

This project helped in understanding:

* React Functional Components
* React Hooks (useState, useEffect)
* CRUD Operations
* Form Handling
* Validation
* State Management
* Dynamic Rendering
* Local Storage
* Responsive Design

---

## 🔮 Future Enhancements

* Search Books
* Filter by Category
* Sorting Functionality
* Pagination
* User Authentication
* Backend Integration
* MongoDB Database
* Image Upload Feature

---

## 📸 Screenshots

Add project screenshots here:


![Home Page](screenshots/home.png)
![Add Book](screenshots/add-book.png)
![Book List](screenshots/book-list.png)


## 👨‍💻 Author

**Jarir Multani**

GitHub:
https://github.com/Dev-Mjarir08

Project Repository:
https://github.com/Dev-Mjarir08/react-PR-6

---

## ⭐ Support

If you found this project useful, please give it a ⭐ on GitHub.

---

## 📄 License

This project is developed for educational and learning purposes.
