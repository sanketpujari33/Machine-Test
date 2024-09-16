# Machine-Test

# Intern Task: Three-Page Website with Authentication, Data Filtering, and Display

## Deploy Link

For detailed Deploy Link, please refer to [Deploy Link](https://machine-test-jyxq.onrender.com/).

## Project Overview

This project is a simple three-page website built as part of the VSI intern task. The website interacts with the following API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to perform the following key functionalities:

1. **User Authentication** – Simulating login using data from the API.
2. **User Profile Page** – Displaying user details fetched from the API.
3. **Posts Page** – Filtering and displaying posts of the logged-in user.

## API Endpoints Used:

- **Users Endpoint**: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)  
  Used for user authentication and fetching user details.
- **Posts Endpoint**: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)  
  Used to fetch and filter posts for the logged-in user.

## Technologies Used

- **React.js** with **React Router** for navigation.
- **Plain CSS** for styling (Responsive for Laptop, Tablet, and Mobile views).
- **useState** and **useEffect** hooks for state management and API integration.
- **useNavigate** and **Link** components for navigation.

## Pages

1. **Login Page**:  
   The user can log in by entering their username (fetched from the users' API). If the user exists, they are authenticated, and the page redirects to the User Profile page.

2. **User Profile Page**:  
   Once logged in, the user's detailed profile is displayed, including name, email, phone, company, and address information.

3. **Posts Page**:  
   This page shows the list of posts made by the logged-in user. The data is fetched from the posts' API and filtered based on the user ID.

## How to Run the Project

1. Clone this repository to your local machine.
2. Open the project directory in your preferred code editor.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server. The website will be available at [http://localhost:3000](http://localhost:3000).

## Features

- Responsive design optimized for laptop, tablet, and mobile views.
- Simple and clean UI with plain CSS.
- User authentication simulation using data fetched from the API.
- Display of user details and their posts.
- Easy navigation between pages using React Router.

## How Authentication Works

- The app uses the `username` field from the `/users` API to simulate login. When a user enters a valid username, they are considered authenticated, and the app stores their information locally to manage session state.

## Folder Structure

```bash
├── public
├── src
│   ├──component
│   │   ├── Navbar.js         # Navbar component
│   │   ├── Footer.js         # Footer component
│   ├── pages
│   │   ├── Login.js         # Login page pages
│   │   ├── UserProfile.js   # User profile page
│   │   ├── Posts.js         # Posts page pages
│   ├── App.js               # Main app component with routing
│   ├── index.js             # Entry point for the React app
│   └── styles.css           # Plain CSS for the project
├── package.json
└── README.md
```

## Submission

- The final code should be zipped and sent to vsiv8425@gmail.com before Monday, 16th September, 8 PM.

# Best of Luck! 🤞

- You can copy this and use it as your README file. Let me know if you'd like to make any further changes!
