
### README for the Whole Project

#### `README.md`

```markdown
# Medium Clone Application

This is a full-stack clone of the Medium platform built using the MEAN stack (MongoDB, Express.js, Angular V17.3.8, Node.js).

## Prerequisites

- Node.js
- MongoDB
- Angular CLI

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/shaukinkhan477/Meduim-Clone.git
    ```

2. Install backend dependencies:

    ```bash
    cd medium-clone/backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET= 'your_jwt_secret'
    ```

4. Start the backend server:

    ```bash
    npm start or node app.js
    ```

## Endpoints

Auth
POST /api/auth/register: Register a new user
POST /api/auth/login: Login a user

Articles
GET /api/articles: Get all articles
GET /api/articles/search: Search articles by title or keyword or tag
GET /api/articles/:id: Get article by ID
POST /api/articles: Create a new article (protected)
PUT /api/articles/:id: Update an article by ID (protected)
DELETE /api/articles/:id: Delete an article by ID (protected)
PUT /api/articles/:id/unpublish: Unpublish an article by ID (protected)

The backend server will start on `http://localhost:5000`.

5. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

6. Start the frontend development server:

    ```bash
    ng serve
    ```

The frontend server will start on `http://localhost:4200`.


## Features

User authentication (login, register)
Create, read, update, delete (CRUD) articles
Search articles by title or tag or keyword
Comment on articles
User profile management


## Conception diagram

+---------------------------+
|         User              |
|                           |
|  Frontend (Angular)       |
|  +---------------------+  |
|  |  Angular Components |  |
|  |    - Navbar         |  |
|  |    - Article List   |  |
|  |    - Article Detail |  |
|  |    - Login          |  |
|  |    - Register       |  |
|  |    - Profile        |  |
|  |    - Search         |  |
|  +---------+-----------+  |
|            |              |
|            v              |
|  +---------------------+  |
|  | Angular Services    |  |
|  |  - AuthService      |  |
|  |  - ArticleService   |  |
|  |  - CommentService   |  |
|  +---------+-----------+  |
|            |              |
|            v              |
|  +---------------------+  |
|  | Angular Guards      |  |
|  |  - AuthGuard        |  |
|  +---------+-----------+  |
|            |              |
|            v              |
|  +---------------------+  |
|  | Backend API         |  |
|  |  - /api/auth        |  |
|  |  - /api/articles    |  |
|  +---------+-----------+  |
|                           |
+-------------|-------------+
              |
              v
+---------------------------+
|        Backend            |
|                           |
|  +---------------------+  |
|  |   Express.js        |  |
|  +---------+-----------+  |
|            |              |
|            v              |
|  +---------------------+  |
|  |   Middleware        |  |
|  |  - authMiddleware   |  |
|  +---------+-----------+  |
|            |              |
|            v              |
|  +---------------------+  |
|  |   Controllers       |  |
|  |  - authController   |  |
|  |  - articleController|  |
|  +---------+-----------+  |
|            |              |
|            v              |
|  +---------+---------+    |
|  |       Routes      |    |
|  |  - authRoutes     |    |
|  |  - articleRoutes  |    |
|  +---------+---------+    |
|            |              |
|            v              |
|  +---------------------+  |
|  | Mongoose Models     |  |
|  |  - User             |  |
|  |  - Article          |  |
|  +---------+-----------+  |
|            |              |
|            v              |
|  +---------------------+  |
|  |     MongoDB         |  |
|  +---------------------+  |
+---------------------------+


## Project Structure

```plaintext
project-root/
├── backend/
│   ├── controllers/
│   │   ├── articleController.js
│   │   ├── authController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── models/
│   │   ├── Article.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── articleRoutes.js
│   │   ├── authRoutes.js
│   ├── config/
│   │   ├── db.js
│   ├── .env
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── article/
│   │   │   │   │   ├── article.component.html
│   │   │   │   │   ├── article.component.ts
│   │   │   │   │   ├── article.component.css
│   │   │   │   ├── article-list/
│   │   │   │   │   ├── article-list.component.html
│   │   │   │   │   ├── article-list.component.ts
│   │   │   │   │   ├── article-list.component.css
│   │   │   │   ├── create-article-dialog/
│   │   │   │   │   ├── create-article-dialog.component.html
│   │   │   │   │   ├── create-article-dialog.component.ts
│   │   │   │   │   ├── create-article-dialog.component.css
│   │   │   │   ├── navbar/
│   │   │   │   │   ├── navbar.component.html
│   │   │   │   │   ├── navbar.component.ts
│   │   │   │   │   ├── navbar.component.css
│   │   │   │   ├── login/
│   │   │   │   │   ├── login.component.html
│   │   │   │   │   ├── login.component.ts
│   │   │   │   │   ├── login.component.css
│   │   │   │   ├── register/
│   │   │   │   │   ├── register.component.html
│   │   │   │   │   ├── register.component.ts
│   │   │   │   │   ├── register.component.css
│   │   │   │   ├── profile/
│   │   │   │   │   ├── profile.component.html
│   │   │   │   │   ├── profile.component.ts
│   │   │   │   │   ├── profile.component.css
│   │   │   │   ├── search/
│   │   │   │   │   ├── search.component.html
│   │   │   │   │   ├── search.component.ts
│   │   │   │   │   ├── search.component.css
│   │   │   ├── services/
│   │   │   │   ├── article.service.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── comment.service.ts
│   │   │   ├── guards/
│   │   │   │   ├── auth.guard.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app-routing.module.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.ts
│   │   │   ├── app.component.css
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   ├── .angular.json
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   ├── tslint.json
│   ├── README.md
