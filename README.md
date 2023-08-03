# Social Media React Native Application

This is a mobile application built using React Native for social media interactions. It allows users to create and share posts with photos or videos, view posts from other users, like posts, and perform various social media activities. The app is designed to work on both Android and iOS devices.

## Features

1. **Post Creation**: Users can create new posts with pictures. They can add a description, location, and tags to their posts.

2. **Post Wall**: The home page of the application displays all the posts in a grid format. For videos, the thumbnail is shown at 0:00 seconds.

3. **Like Functionality**: Users can like posts by tapping on the like button.

4. **Enlarged View**: Users can tap on any post to view it in an enlarged format. For pictures, tapping will open the picture in full-screen view with other pictures shown on scroll.

5. **Image Editor**: After selecting a photo for a post, users can select from three aspect ratios: 1:1, 4:5, or 16:9.

6. **User Authentication**: The application supports user authentication, allowing users to log in or register with their email and password.

7. **Guest Access**: Users can continue as guests without logging in.

## Technologies Used

- **Frontend**: React Native with Expo
- **Backend**: Node.js, Express.js, MongoDB with Mongoose
- **User Authentication**: JSON Web Tokens (JWT)
- **Image and Video Handling**: Cloudinary
- **Navigation**: React Navigation


## Running the Application

- To run the frontend, navigate to the `frontend` directory and run `npm install` to install the required dependencies. Then, use `npm start` to start the development server 

- Run the application on your mobile device using the Expo Go app.

- The backend server is deployed on Render, and its endpoints are configured in the frontend to interact with the backend API.

- To run the backend server locally run `npm install` and then `npm start` in the `backend` directory.

## Configuration

- The backend server uses a `config.env` file in the `backend/config` directory to store environment variables such as the MongoDB connection string, Cloudinary API key, and JWT secret key.


## Folder Structure

- `frontend`: Contains the main application code, including screens and components.
  - `screens`: Contains the different screens of the application.
  - `components`: Includes reusable components used across the application.
- `backend`: Contains the backend server code.
  - `routes`: Contains API routes for handling posts, user routes.
  - `models`: Defines the MongoDB models for posts and users.
  - `middleware`: Includes middleware functions for authentication and error handling.
  - `controller`: Contains the controller functions for handling the business logic of the application.



## Future Improvements

1. Add social sharing options for posts.
2. Implement real-time notifications for new likes and comments.
3. Enhance image and video posting and editing capabilities.
4. Implement more advanced user authentication features like password reset and email verification.


