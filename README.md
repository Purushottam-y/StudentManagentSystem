# Student Management System

A Java-based Student Management System developed using JDBC and MySQL. This project performs CRUD (Create, Read, Update, Delete) operations on student records and demonstrates database connectivity using Java.

## Features

- Add Student
- View All Students
- Update Student Details
- Delete Student Records
- MySQL Database Connectivity
- JDBC-Based Data Operations

## Technologies Used

- Java
- JDBC
- MySQL
- Git & GitHub
- VS Code

## Project Structure

```
src/
├── DBConnection.java
├── Student.java
├── StudentDAO.java
└── Main.java
```

## Database Schema

Table: students

| Column | Type |
|----------|----------|
| id | INT |
| name | VARCHAR(100) |
| course | VARCHAR(100) |
| marks | DOUBLE |

## How to Run

1. Install MySQL Server
2. Create Database:

```sql
CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students(
    id INT PRIMARY KEY,
    name VARCHAR(100),
    course VARCHAR(100),
    marks DOUBLE
);
```

3. Update database credentials in `DBConnection.java`
4. Compile Java files
5. Run `Main.java`

## Learning Outcomes

- JDBC Connectivity
- CRUD Operations
- Database Management
- Object-Oriented Programming
- Exception Handling

## Future Improvements

- Student Search by ID
- Login Authentication
- GUI using Java Swing
- Attendance Management
- Report Generation
- Spring Boot REST API Integration

## Author

**Purushottam Kumar**

MCA Student | Java Developer | Database Enthusiast

GitHub: https://github.com/Purushottam-y
