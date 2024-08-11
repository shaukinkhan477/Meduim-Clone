# Backend for Medium Clone Application

This is the backend part of the Medium Clone application built with Node.js v20.11.0, Express, and MongoDB v6.0.4.

## Prerequisites

- Node.js v20.11.0
- MongoDB v6.0.4

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/shaukinkhan477/Meduim-Clone.git
    cd medium-clone/backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
     node app.js
    ```

The backend server will start on `http://localhost:5000`.

## Endpoints

## Auth
POST /api/auth/register: Register a new user
POST /api/auth/login: Login a user
## Articles
GET /api/articles: Get all articles
GET /api/articles/search: Search articles by title or keyword or tag
GET /api/articles/:id: Get article by ID
POST /api/articles: Create a new article (protected)
PUT /api/articles/:id: Update an article by ID (protected)
DELETE /api/articles/:id: Delete an article by ID (protected)
PUT /api/articles/:id/unpublish: Unpublish an article by ID (protected)

## Conception diagram

+---------------------+
|  Client Requests    |
+---------+-----------+
          |
          v
+---------------------+
|     Express.js      |
+---------+-----------+
          |
          v
+---------------------+
|    Middleware       |
|  - authMiddleware   |
+---------+-----------+
          |
          v
+---------------------+
|     Controllers     |
|  - authController   |
|  - articleController|
+---------+-----------+
          |
          v
+---------+---------+
|       Routes      |
| - authRoutes      |
| - articleRoutes   |
+---------+---------+
          |
          v
+---------------------+
|    Mongoose Models  |
|  - User             |
|  - Article          |
+---------+-----------+
          |
          v
+---------------------+
|      MongoDB        |
+---------------------+


## Project Structure

```plaintext
backend/
├── controllers/
│   ├── articleController.js
│   ├── authController.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── Article.js
│   ├── User.js
├── routes/
│   ├── articleRoutes.js
│   ├── authRoutes.js
├── config/
│   ├── db.js
├── app.js
├── package.json
├── package-lock.json
├── README.md

