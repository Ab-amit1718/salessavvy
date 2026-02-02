🛒 SalesSavvy – Full Stack E-Commerce Application

SalesSavvy is a full-stack e-commerce web application built using Spring Boot (Java) for the backend and React (Vite) for the frontend.
It supports user authentication, product browsing, cart management, order placement, and an admin order-management panel.
This project was built to understand real-world full-stack architecture, JWT authentication, role-based access, and REST APIs.

🚀 Features

👤Authentication & Authorization
User registration and login
JWT-based authentication
Role-based access:
*CUSTOMER
*ADMIN

🛍️ Customer Features
View all products
Add products to cart
Place orders
View own orders
Order status updates (Pending / Success)

🛠️ Admin Features
View all customer orders
Approve or reject orders
Order status persists in database
Admin UI visible only for ADMIN role

🧱 Tech Stack

**Backend
-Java 17
-Spring Boot
-Spring Security (JWT)Spring Data JPA
-MySQL
-Hibernate
**Frontend
-React (Vite)
-JavaScript
-Fetch API
-LocalStorage for JWT handling

📂 Project Structure

salessavvy/
│
├── salessavvy-backend/
│   ├── src/main/java
│   ├── src/main/resources
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── auth/
│   │   ├── api/
│   │   └── components/
│   └── package.json

⚙️ Setup Instructions (Local)

1️⃣ Backend Setup
Prerequisites
-Java 17+
-MySQL
-Maven

Steps
cd salessavvy-backend

Update your MySQL credentials in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/salessavvy
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

Run backend:
mvn spring-boot:run

Backend runs on:
http://localhost:9090

2️⃣ Frontend Setup
Prerequisites
-Node.js (18+ recommended)
-npm

Steps
cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

🔐 Roles

*CUSTOMER
Default role during registration
Can place and view orders

*ADMIN
Can view all orders
Can approve/reject orders
Admin UI appears automatically after login if role is ADMIN.

🧪 Demo Flow

1)Register as CUSTOMER
2)Login
3)Add products to cart
4)Place order (status = PENDING)
5)Login as ADMIN
6)Approve or reject orders
7)Customer sees updated order status

📌 Known Limitations

Payment flow is mocked
No product images upload (static only)
No deployment yet (Docker planned later)

📈 Future Improvements

Docker + Docker Compose
Payment gateway integration
Product image uploads
Pagination & search
Better UI styling
Cloud deployment (AWS / Render)

🧠 What This Project Demonstrates

Real authentication flow using JWT
Secure REST APIs
Role-based UI rendering
Backend–frontend integration
Practical debugging & architecture decisions

👤 Author

Amit Naik
Built as a learning-focused full-stack project.
