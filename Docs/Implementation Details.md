We began by designing the user interface using HTML and CSS. The layout is clean and mobile-friendly. JavaScript is used for interactive features like password generation and form validation.

The registration form accepts user details and sends a simulated OTP to the provided email. The entered OTP is checked against the stored value before allowing access. Passwords are hashed before storage to avoid plain-text exposure.

A strong password generator was developed using JavaScript. It selects random characters from a mix of letters, numbers, and symbols to create a secure password of 12+ characters.

On the dashboard page, users can save credentials for different websites. These are stored in the database with a reference to the user ID. When viewing saved passwords, the data is shown in a masked format (••••••) with a copy button next to it. This ensures security while providing ease of access.

Security measures include input sanitization, hashed passwords, user session management, and user-specific data access.
