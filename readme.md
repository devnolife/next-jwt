## devnolife **(Next Authentication With Json Web Token)**
This is a Node.js Express application implementing a basic authentication system with JWT (JSON Web Tokens). Users can log in using a username and password, and upon successful authentication, they will receive a token that allows them to access protected routes, such as their profile information.

## Features

* User login with username and password
* JWT-based authentication
* Protected profile endpoint accessible only to authenticated users
* Error handling for invalid login attempts and unauthorized access

## Installation

1. Clone this repository or download the project files.
2. Install the required dependencies using npm or yarn:

```bash
npm install express cors passport jsonwebtoken
```

**Gunakan kode dengan hati-hati (Use code responsibly).**

## Configuration

The application currently expects user data to be retrieved from a function called `checkUser` in a file named `data.js`. You'll need to implement this function according to your specific user data storage mechanism (e.g., database, in-memory storage).

* **If using a database:** Establish a connection and define queries to fetch user information based on username and password.
* **If using in-memory storage:** Create a data structure (e.g., an object or array) to hold user credentials securely.

## Running the Application

1. Start the server by running:

```bash
node server.js
```

**Gunakan kode dengan hati-hati (Use code responsibly).**

The server will listen on port 8000 by default. You can access it in your browser at http://localhost:8000.

## API Endpoints

**POST /login**

**Request body:**

* `username`: The user's username.
* `password`: The user's password (**Note:** Sending passwords in plain text is not recommended in production environments. Consider using a hashing mechanism for secure storage.)

**Response:**

* **On successful login:**
    * `message`: "Login berhasil" (Login successful)
    * `status`: 200
    * `token`: A JWT token that can be used to access protected routes.
* **On invalid login:**
    * `message`: "Kata sandi tidak valid" (Invalid password)
    * `status`: 400
* **On missing user:**
    * `message`: "Login gagal, user tidak ditemukan" (Login failed, user not found)
    * `status`: 400

**GET /profile (Protected)**

Requires a valid JWT token in the Authorization header (Bearer token format).

**Response:**

* `message`: "Profile"
* `user`: The user's profile information (as retrieved from the `checkUser` function)

## Additional Notes

* This is a basic example and may require further enhancements for production use.
* Consider implementing error handling for potential issues during the authentication process and data retrieval.
* Enhance security by using HTTPS for communication and secure password hashing mechanisms.
* You might want to explore using environment variables to store secret keys and other sensitive data.
