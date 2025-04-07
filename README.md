📒 SmartContactManager
SmartContactManager is a full-stack contact management web application built with Java and Spring Boot. It allows users to securely register, login, and manage their personal or professional contacts via an intuitive and responsive interface.

🚀 Tech Stack
Backend: Java, Spring Boot, Spring Security

Frontend: JSP, HTML, CSS, JavaScript

Database: MySQL

Authentication: Spring Security (with BCrypt password encoding)

🔑 Features
🔐 User Authentication & Authorization using Spring Security

🧾 User Dashboard with contact management capabilities

📇 CRUD Operations on Contacts (Create, Read, Update, Delete)

🔍 Search Functionality for quick access to contacts

📤 Profile & Contact Image Uploads

📱 Responsive Design for a better user experience

📧 Email and phone number validation

🧼 Clean and maintainable codebase following best practices

📁 Project Structure
scss
Copy
Edit
SmartContactManager
├── src
│   ├── main
│   │   ├── java (controllers, services, models, repositories)
│   │   └── resources
│   │       ├── templates (JSP files)
│   │       └── static (CSS, JS, images)
├── pom.xml
└── application.properties
⚙️ How to Run Locally
Clone the repository

bash
Copy
Edit
git clone https://github.com/rajeevpatwa/SmartContactManager.git
Configure MySQL
Create a database named smart_contact_manager and update the DB credentials in application.properties.

Build and Run the Application

bash
Copy
Edit
mvn spring-boot:run
Access the App
Open your browser and visit:
http://localhost:8080

📸 Screenshots
(Optional – You can add images showing the login screen, dashboard, contact list, etc.)

🛡️ Security Highlights
Passwords stored securely using BCrypt hashing

Access control using role-based authorization

Protection from unauthorized access and data breaches

📌 Future Enhancements
Forgot password feature with email verification

Pagination and filtering of contact list

REST API support for external integrations

Deploy to cloud (AWS/GCP)
