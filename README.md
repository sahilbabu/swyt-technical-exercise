# swyt-technical-exercise
Swyt Coding Challenge Software Engineer application by Mudassar Ali

# API's (Backend)

A simple API to manage products and their categories built with Express.js, TypeScript, PostgreSQL, and Prisma ORM.

## Technologies Used

- Backend: Express.js with TypeScript
- Database: PostgreSQL with Prisma ORM
- Security: CORS, Helmet
- Logger: Morgan
- Utilities: body-parser, dotenv

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)
- PostgreSQL (>= 12.x)

## Getting Started

### Installation

1. **Clone the Repository**

    ```sh
    git clone <repository-url>
    cd product-management-api
    ```

2. **Install Dependencies**

    ```sh
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory:

    ```env
    DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database>?schema=public"
    PORT=3000
    ```

4. **Set Up the Database**

    ```sh
    npx prisma migrate dev --name init
    ```

### Running the Application

```sh
