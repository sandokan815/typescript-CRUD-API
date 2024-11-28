# User Management API

This is a basic **User Management API** built using **TypeScript** and **Express**. It provides basic **CRUD** operations for user management and serves as a foundation for scalable API development.

## Logic and Approach

### 1. **Separation of Concerns**

The application follows a **modular structure**:
- **Routes** handle API endpoints.
- **Controllers** process the business logic for each request.

This separation ensures **scalability** and makes it easy to extend or modify the application in the future.

### 2. **Data Storage**

For simplicity, user data is stored in an in-memory array. The data is not persistent, and the application does not use a database. In a production environment, this would be replaced by a **database** (e.g., MySQL, PostgreSQL, MongoDB).

### 3. **Validation**

When handling **POST** requests, input validation ensures that the **name** and **email** fields are provided. If the input is invalid or incomplete, a **400 Bad Request** error is returned. This improves **data integrity** by ensuring that only valid data is processed.

### 4. **HTTP Status Codes**

The application uses appropriate **HTTP status codes** to indicate the result of each operation:
- **200 OK**: Returned for successful **GET** requests.
- **201 Created**: Returned when a new user is successfully created via **POST**.
- **400 Bad Request**: Returned if the input for a **POST** request is invalid or incomplete.

## Why This Approach?

### 1. **Scalability**

By separating routes and controllers, the structure allows for easy expansion. You can add more endpoints or logic without affecting the core application structure.

### 2. **Best Practices**

The application follows **RESTful principles**, where each endpoint serves a specific purpose:
- `GET /`: Fetch all users.
- `POST /`: Create a new user.
- `PUT /:id`: Update a user.
- `DELETE /:id`: Delete a new user.

### 3. **User-Centric Design**

This API is designed to handle basic CRUD operations for user management, making it easy to manage users in your system. The design serves as a solid foundation for building more complex APIs, such as those with authentication, authorization, and advanced business logic.

### 4. Prerequisites

Make sure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### 5. `GET /letter-combinations`
Get all possible letter combinations for a given phone number input (digits 2-9).

**Query Parameter:**
- `digits`: A string of digits (2-9).

**Example:**
- Input: `GET /letter-combinations?digits=23`
- Output: `["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/sandokan815/typescript-CRUD-API.git

2. Install and Test
   ```bash
   npm install
   npm run dev
   npm test




