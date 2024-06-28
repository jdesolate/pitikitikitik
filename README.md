# Pitikitikitik

Welcome to Pitikitikitik, a fun and playful app where users can share their favorite places through snaps and flicks. Capture and share your moments, and explore the beautiful spots shared by others.

## Disclaimer
This project is a work in progress and is currently built using MongoDB, Express, React, and Node (MERN).

## Features
- User Authentication: Sign up, login, and manage your profile.
- Image Posting: Upload images with titles and descriptions.
- User Permissions: Update and delete your own images, view others' images.
- Responsive Design: Mobile-friendly interface.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Image Storage**: Multer and AWS S3 (or local directory)

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- AWS account (if using S3 for image storage) / TBD

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/pitikitikitik.git
    cd pitikitikitik
    ```

2. **Install backend dependencies**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**
    ```bash
    cd ../web
    npm install
    ```

4. **Set up environment variables**
    Create a `.env` file in the `backend` directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    AWS_ACCESS_KEY_ID=your_aws_access_key_id
    AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
    S3_BUCKET_NAME=your_s3_bucket_name
    ```

### Usage

1. **Run the backend**
    ```bash
    cd backend
    npm start
    ```

2. **Run the frontend**
    ```bash
    cd ../web
    npm run dev
    ```

3. **Open your browser**
    Navigate to `http://localhost:3000` to see the app in action.

   
<img align="center" alt="Camera and Buildings" src="https://jdesolate.github.io/images/pitik-img.png">
