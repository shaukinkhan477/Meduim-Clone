# MediumCloneFrontend

This is the frontend part of the Medium Clone application built with Angular version 17.3.8.

## Prerequisites

- Node.js
- Angular CLI

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/shaukinkhan477/Meduim-Clone.git
    cd medium-clone/frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

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
+---------------------+
|  User Interface     |
|  - Angular Components|
|    - Navbar          |
|    - Article List    |
|    - Article Detail  |
|    - Login           |
|    - Register        |
|    - Profile         |
|    - Search          |
+---------+-----------+
          |
          v
+---------------------+
|    Angular Services |
|  - AuthService      |
|  - ArticleService   |
|  - CommentService   |
+---------+-----------+
          |
          v
+---------------------+
|     Angular Guards  |
|  - AuthGuard        |
+---------+-----------+
          |
          v
+---------------------+
|    Backend API      |
|  - /api/auth        |
|  - /api/articles    |
+---------------------+


## Project Structure

```plaintext
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── article/
│   │   │   │   ├── article.component.html
│   │   │   │   ├── article.component.ts
│   │   │   │   ├── article.component.css
│   │   │   ├── article-list/
│   │   │   │   ├── article-list.component.html
│   │   │   │   ├── article-list.component.ts
│   │   │   │   ├── article-list.component.css
│   │   │   ├── create-article-dialog/
│   │   │   │   ├── create-article-dialog.component.html
│   │   │   │   ├── create-article-dialog.component.ts
│   │   │   │   ├── create-article-dialog.component.css
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.ts
│   │   │   │   ├── navbar.component.css
│   │   │   ├── login/
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.css
│   │   │   ├── register/
│   │   │   │   ├── register.component.html
│   │   │   │   ├── register.component.ts
│   │   │   │   ├── register.component.css
│   │   │   ├── profile/
│   │   │   │   ├── profile.component.html
│   │   │   │   ├── profile.component.ts
│   │   │   │   ├── profile.component.css
│   │   │   ├── search/
│   │   │   │   ├── search.component.html
│   │   │   │   ├── search.component.ts
│   │   │   │   ├── search.component.css
│   │   ├── services/
│   │   │   ├── article.service.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── comment.service.ts
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.component.css
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
├── .angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── tslint.json
├── README.md
