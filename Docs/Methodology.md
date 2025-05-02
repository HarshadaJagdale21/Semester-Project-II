The project uses a web-based approach with the following technology stack:

Frontend: HTML, CSS, and JavaScript are used to design a responsive and attractive interface.
Backend: PHP is used to handle server-side logic like user authentication, OTP verification, and password storage.
Database: MySQL stores user details and password records securely.

The system includes the following modules:

Registration and Login: New users can register using their email and password. An OTP verification step ensures secure registration.

OTP Verification (Simulated): When a user registers or logs in, a 6-digit OTP is sent via simulated email for verification.

Dashboard: Once logged in, the user can save website details including the site name, username, and password.

Password Generator: A tool generates random secure passwords containing uppercase, lowercase, digits, and symbols.

View Passwords: Users can view their saved credentials in a masked format (dots) and copy them easily using a button.

The database includes user credentials and saved password records. User passwords are hashed for security using PHP’s built-in password_hash() function. Each user can view only their own data.
