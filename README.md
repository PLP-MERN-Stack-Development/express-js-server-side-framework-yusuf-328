## Week 2  Express.js RESTful API Assignment

###  Project Overview
This project is a *RESTful API* built with *Express.js* for managing product data.  
It demonstrates how to:
- Build CRUD endpoints using Express.js and MongoDB (via Mongoose)
- Use environment variables with dotenv
- Implement custom middleware (for logging, validation, and authentication)
- Add pagination, filtering, and search features
- Handle errors properly across all routes

---

###  Technologies Used
- *Node.js* (v18+)
- *Express.js*
- *MongoDB* with *Mongoose*
- *dotenv*
- *morgan*
- *uuid* (for unique request IDs)
- *Custom Middleware* (auth, validation, error handling)

---

###  Project Structure

 Week2_assignment
  server.js
  db.js
  product.js
  productController.js
  productRoutes.js
  auth.js
  validateProduct.js
  .env
  package.json
  README.md


---

###  Environment Variables
Your .env file should include the following:


PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/week2_assignment
API_KEY=mysecretkey


> Replace mysecretkey with your own preferred key.

---

###  Running the Server

1. Install dependencies:
   bash
   npm install
   

2. Start the server:
   bash
   npm start
   

3. You should see:
   
   Server running on port 3000
   MongoDB Connected: 127.0.0.1
   

---

###   API Endpoints

####  GET /api/products
Fetch all products, with optional *search, filter, and pagination*.

*Query parameters (optional):*
| Parameter | Description | Example |
|------------|-------------|----------|
| search | Search by product name (case-insensitive) | ?search=phone |
| category | Filter by category | ?category=electronics |
| minPrice | Minimum price | ?minPrice=100 |
| maxPrice | Maximum price | ?maxPrice=500 |
| page | Page number (default 1) | ?page=2 |
| limit | Items per page (default 10) | ?limit=5 |

*Example:*

GET http://localhost:5000/api/products?search=laptop&minPrice=100


*Response:*
json
{
  "total": 2,
  "page": 1,
  "limit": 10,
  "data": [
    {
      "_id": "67167f9d8f...",
      "name": "Laptop Pro",
      "price": 1200,
      "category": "Electronics"
    }
  ]
}


---

#### 2ï¸âƒ£ GET /api/products/:id
Fetch a single product by its ID.

*Example:*

GET http://localhost:5000/api/products/67167f9d8f...


*Response:*
json
{
  "_id": "67167f9d8f...",
  "name": "Laptop Pro",
  "price": 1200,
  "category": "Electronics"
}


---

#### 3ï¸âƒ£ POST /api/products
Create a new product.

*Headers:*

Authorization: Bearer mysecretkey
Content-Type: application/json


*Body:*
json
{
  "name": "Smartphone X",
  "price": 999,
  "category": "Electronics"
}


*Response:*
json
{
  "_id": "67167fa88f...",
  "name": "Smartphone X",
  "price": 999,
  "category": "Electronics",
  "createdAt": "2025-10-19T12:00:00Z"
}


---

#### 4ï¸âƒ£ PUT /api/products/:id
Update a product by ID.

*Headers:*

Authorization: Bearer mysecretkey
Content-Type: application/json


*Body (any field can be updated):*
json
{
  "price": 1099
}


*Response:*
json
{
  "_id": "67167f9d8f...",
  "name": "Smartphone X",
  "price": 1099,
  "category": "Electronics"
}


---

#### 5ï¸âƒ£ DELETE /api/products/:id
Delete a product by ID.

*Headers:*

Authorization: Bearer mysecretkey


*Response:*
json
{
  "message": "Product removed successfully"
}


---

### ðŸ§± Middleware Implemented
| Middleware | File | Purpose |
|-------------|------|----------|
| morgan | built-in | Logs all incoming requests |
| auth.js | Custom | Protects POST, PUT, DELETE endpoints using API_KEY |
| validateProduct.js | Custom | Ensures product data is valid before saving |
| Error Handler | Inline | Handles all thrown errors consistently |

---

### âš ï¸ Error Handling
All controller functions use try...catch and delegate errors to a global handler:
js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(res.statusCode || 500).json({
    message: err.message || 'Server Error'
  });
});


---

### ðŸ“¦ Sample MongoDB Document
json
{
  "_id": "67167f9d8f...",
  "name": "Wireless Mouse",
  "price": 45,
  "category": "Accessories",
  "createdAt": "2025-10-19T09:00:00Z"
}


---

### âœ… Summary of Features
âœ”ï¸ Express.js RESTful API  
âœ”ï¸ MongoDB connection via Mongoose  
âœ”ï¸ CRUD operations  
âœ”ï¸ Search, filter, and pagination  
âœ”ï¸ Environment variables  
âœ”ï¸ Middleware: logging, auth, validation  
âœ”ï¸ Centralized error handling
