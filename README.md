
PROJECT NAME : ZipCar
LIVE SERVER  : https://car-rental-frontend-hazel.vercel.app

This is a car rental site where users can rent and return cars easily.

- Summary of this project.
First of all, a user will sign up and login to this site then user can perform booking a car and everything. After booking a car, by default the booking is pending then checking the info, if the booking info is okay, admin will approve the booking and once the booking is approved for rent, user cannot modify the booking. The cost calculation is counted from the time given by the user. To return the car to the admin user need to send a request to the admin and after returning, user can pay the total cost. Once admin approves the return request of the user, the process will be completed and you can explore the rest of the features of this site.


What users can do : 
-  user can sign up and login by giving information and update their data from Profile.
-  user can see available cars from the banner by giving location.
-  user can book a car and after booking user can cancel and modify the booking if the booking is pending.
- from cars page user can filter the cars by using some fields.
- after returning the car user can pay the cost.


What admin can do : 
-  admin also can sign up and login.
-  admin can manage all the things from dashboard.
-  admin can manage cars, bookings, return cars and users.
-  admin can see the statistics from the overview page in the dashboard.


Features : 
- Has a secure authentication with JWT.
- Has a role based dashboard.
- Main routes have been protected.
- Pixel Perfect Responsive.
- Error handing and UX focus.


How to run the project locally?

- Install all the dependencies by this command 'npm install'.
- Replace the 'baseURL' in 'baseApi.ts' file with your the server URL.
- Add an property named 'VITE_PAYMENT_KEY' in .env file for stripe payment secret. 
- To build the project use this "npm run build" and run with 'npm run dev'

The technologies and packages used in this project :  

- Tailwind CSS
- React, Redux Toolkit and redux-persist
- Typescript
- Daisy UI as Css framework
- react-slick and react-headroom
- react-hook-form , react-router-dom
- react-image-gallery , react-icons
