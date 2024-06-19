# Iron Bank of Avion
Welcome to The Iron Bank of Avion! This application provides a secure and efficient platform for managing financial transactions and operations.

## Scenario
The user is a bank employee who manually manages the bank's accounts. This app automates the processes of account creation, deposit, withdrawal, and balance transfers. It also provides functionalities to display user information and manage expenses.

## Features
### Core Features
1. **Account Management**
    - **Create User**: Create new bank accounts with a specified initial balance.
    - **Update User**: Modify user details such as name and balance.
    - **Delete User**: Remove accounts securely.
2. **Transaction Management**
    - **Deposit**: Increase a user's balance by a specified amount.
    - **Withdraw**: Decrease a user's balance by a specified amount.
    - **Transfer**: Transfer funds between two user accounts.
3. **User Interface**
    - **Display Users**: View all users and their balances in a table format.
    - **Forms for Actions**: Use intuitive forms for creating users, making deposits/withdrawals/transfers.
4. **Error Handling**
    - **Input Validation**: Validate user inputs for correctness (e.g., non-negative amounts, unique user names).
    - **User Existence**: Handle errors for operations involving non-existent users.
    - **Sufficient Funds**: Prevent transactions that exceed available funds.
5. **Persistence**
    - **localStorage**: Store user data locally to maintain state across page refreshes.
6. **Budget Management**
    - **Expense Items**: Users can add, delete, update, and list expense items.
    - **Balance Adjustment**: Deduct costs of expense items from the user's balance, even if it results in a negative balance.

### Additional Features
- **Send Money**: Allow users to send money to other registered users.
- **Mobile Load Purchase**: Enable users to purchase prepaid mobile load using their account balance.
- **Foreign Exchange Calculator**: Calculate currency conversions based on current exchange rates.
- **Personal Goals**: Allow users to list their personal goals within the app and enable them to update and manage over time.
- **Responsive Design**: Ensures usability on various screen sizes and devices.
- **Toasts and Notifications**: Informative messages for successful transactions and errors.
- **User-Friendly Interface**: Intuitive layout and navigation for easy interaction.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast, modern build tool that serves your code via native ES Module imports during development.
- **React Router**: Declarative routing for React applications.
- **Lucide Icons**: Lightweight SVG icon library for React components.
- **React Toastify**: React notification system to add toast notifications to your app.
- **React Hot Toast**: Toast notifications for React apps with built-in hot-reloading support.

## Installation and Setup
### Prerequisites
Before starting, ensure you have **Node.js** and **npm** installed on your machine.

1. Clone the repository and navigate into the project directory: ```git clone https://github.com/dhanniela/banking-app.git```
                                                                 ```cd banking-app```
                                                                 ```npm install```
2. To run the app in development mode: ```npm run dev```
3. Open **http://localhost:3000** in your browser to view it.
   
   To build the app for production: ```npm run build```

## Contributing
Contributions are welcome! This project is intended for educational purposes, and we appreciate any enhancements or bug fixes you can provide. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: ```git checkout -b feature/enhancement or bugfix/issue-description```
3. Make your changes.
4. Commit your changes: ```git commit -am 'Add feature/enhancement' or 'Fix bug: issue description'```
5. Push to the branch: ```git push origin feature/enhancement or bugfix/issue-description```
6. Create a new **Pull Request**.

## Acknowledgment
We would like to express our gratitude to the dedicated team members who contributed their time and expertise to this project. Your collaborative spirit and hard work were essential in developing a platform that enhances financial management and addresses real-world challenges in banking. Thank you for your invaluable contributions and commitment to making this project a success.

## Credits
The Iron Bank of Avion draws inspiration from the need to provide robust financial services and streamline banking operations. The platform aims to offer secure banking solutions and efficient customer service. Design and functionalities are influenced by modern web development practices to ensure user-friendly interactions and operational effectiveness.

## License
This project is for personal and educational purposes only. All content related to The Iron Bank of Avion, including its design, functionalities, and concept, is the property of its respective owners.
