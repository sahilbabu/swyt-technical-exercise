# Swyt Technical Exercise
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

- Node.js (v21.6.2)
- npm (10.7.0)
- PostgreSQL (16.2)

## Getting Started

### Installation

1. **Clone the Repository**

    ```sh
    git clone git@github.com:sahilbabu/swyt-technical-exercise.git
    cd backend
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
    API_URL="http://localhost:3000/api/v1/products" #for CLI version
    NODE_ENV=development
    ```

4. **Set Up the Database**

    ```sh
    npx prisma migrate dev --name init
    ```

### Running the Application

     npm run dev

### Testing

1. **Run Unit Tests**

    ```sh
    npm run test
    ```

### API Endpoints

1. **Categories API**

    **1- Create Category**
    Endpoint: POST /api/v1/categories
    Request Body:{
          "name": "Category Name",
          "parentCategoryId": 1 // optional
        }
    
      **2- List Categories**
    Endpoint: GET /api/v1/categories



1. **Product API**

    **1- Create Product**
    Endpoint: POST /api/v1/products
    Request Body:{
          "name": "Product Name",
          "description": "Product Description",
          "price": 10.99,
          "image": "http://example.com/image.jpg", // URL or file upload
          "categoryId": 1
        }

    
      **2- List Product**
    Endpoint: GET /api/v1/products
    Query Parameters:
        sortBy: Field to sort by (e.g., price).
        order: Sorting order (asc or desc).
        category: Filter by category ID.
        page: Page number for pagination.
        limit: Number of items per page.


### Create a product using the CLI

1. **Run the following command**

    ```sh
    npm run create-product
    ```


## Vue3 Web APP

Before you begin, ensure you have the following installed on your machine:



  ```bash
  cd vue3-app
  npm install
  npm run dev
  ```

### Production

1. **Building for Production**

    ```sh
    npm run build
    ```
    
### Web APP Tests

1. **Run Cypress**

    ```sh
    npm run test:open
    ```
1. **Run all tests in headless mode**

    ```sh
    npm run test
    ```
    
