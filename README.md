# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Environment Variables](#environment-variables)
  - [Project Structure](#project-structure)
  - [Api EndPoint](#api-endpoint)

<!-- PROJECT DESCRIPTION -->

# 📖 [Assignment] <a name="about-project"></a>

This is the github repo for assignment submission

## 🛠 Built With <a name="built-with"></a>

## Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mongodb.com/docs/">MongoDB</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Create, Read, Update, and Delete (CRUD) operations for tasks]**
- **[Validation of input data to ensure data integrity.]**
- **[Error handling for failed operations.]**

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```
Nodejs
Git
```

## Setup

Clone this repository to your desired folder:

`git clone https://github.com/SurajG20/Assignment.git
`

## Install

Install this project with:

```
cd Assignment
npm install
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```
 PORT=3000 (Any port)
 MONGODB_URL= Your mongodb connection url
```

## Project Structure

```
src\
 |--controllers\    # Route controllers (controller layer)
 |--db\             # MongoDB connection
 |--controllers\    # Errors handlers
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--app.js          # Express app
 |--.env            # Enviroment Configuration
```

## API Endpoints

List of available routes:

**User routes**:\
`POST api/v1/tasks` - create task\
`GET api/v1/tasks` - get all tasks\
`GET api/v1/tasks?category="work"` - get task of particular category by using query\
`GET api/v1/tasks/:userId` - get single task\
`PATCH api/v1/tasks/:userId` - update task\
`DELETE api/v1/tasks/:userId` - delete task
