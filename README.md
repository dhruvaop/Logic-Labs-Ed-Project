# Logic Labs Ed.

Logic Labs Ed is an ED Tech (Education Technology) web application developed using the MERN stack.

## Note

This project is intended as a learning tool and can be used as a sample project for educational or personal projects.


***
## Features

* User Authentication: Logic Labs Ed provides secure user registration and authentication using JWT (JSON Web Tokens). Users can sign up, log in, and manage their 
  profiles with ease.
  
* Courses and Lessons: Instructors can create and edit created courses. Students can enroll in courses, access course materials, and track their progress.

* Progress Tracking: Study Notion allows students to track their progress in enrolled courses. They can view completed lessons, scores on quizzes and 
  assignments, and overall course progress.
  
* Payment Integration: Study Notion integrates with Razorpay for payment processing. Users can make secure payments for course enrollment and other services 
  using various payment methods supported by Razorpay.
  
* Search Functionality: Users can easily search for courses, lessons, and resources using the built-in search feature. This makes it convenient to find relevant 
  content quickly.
  
* Instructor Dashboard: Instructors have access to a comprehensive dashboard to view information about their courses, students, and income. The 
 dashboard provides charts and visualizations to present data clearly and intuitively. Instructors can monitor the total number of students enrolled in 
 each course, track course performance, and view their income generated from course sales.


***
## Screenshots
![Screenshot 2023-07-25 210844](https://github.com/dhruvaop/Logic-Labs-Ed-Project/assets/71749153/74a19fe3-2965-4115-ab5a-3c74cd8a39c8)

![Screenshot 2023-07-25 211309](https://github.com/dhruvaop/Logic-Labs-Ed-Project/assets/71749153/d5ac6fe3-987f-48ae-af1f-360a27a24a59)
<details>
  
  <summary>More screenshots</summary>
  
![Screenshot 2023-07-25 211451](https://github.com/dhruvaop/Logic-Labs-Ed-Project/assets/71749153/5363112f-d8f5-4e68-b682-ed23e7a5213f)

</details>


***

## How to Use

#### 1. Clone or extract this github repo in your local machine

```
git clone https://github.com/dhruvaop/Logic-Labs-Ed-Project
```

#### 2. Move to backend directory

```
cd backend
```

#### 3. Install dependencies

```
npm i
```

#### 4. Rename "config/example.config.env" to "config/config.env" and set/update all the values/settings of your own

```
mv config/example.config.env config/config.env
```

#### 5. Run App (default - server will run on port 4000)

##### 5.1. Run in development mode

```
npm run dev
```

##### 5.2. Run in production mode

```
npm start
```

#### 6. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.

The project is set up to use `postcss-cli` to process your CSS files. You can add your own `tailwind.config.js` file to customize your Tailwind setup.
