# weather-demo

This application allows an user to check current weather, and notify weather information by LINENotify at specific time everyday if it's configured. <br>

To receive notification, you have to register/login to this app. <br>

You can see weather information in browser by inputting zipcode without registration or login. <br>

:earth_asia: Currently, this application supports for four countries to fetch weather information. (USA, Germany, Thailand, Singapore)

<img src="https://user-images.githubusercontent.com/55787141/74496560-fa45b000-4f15-11ea-8a29-eca19641cd13.png" width="570" height="300">

<img src="https://user-images.githubusercontent.com/55787141/74497208-f581fb80-4f17-11ea-8c7d-f40ce0ddf5db.jpg" width="570" height="300">



## Why I created this app

This app is to show my skill of developing. <br>
I've been developing a web application and mobile application uging some languages such as React.js and NativeScript. Threfore I wanted to show my skill with this application. <br>

This application was developed using React.js and Node.js which helps to show my developing skill for frontend and backend. In the node.js side, I created some entrypoints to handle some functions such as connecting with LINENotify. <br>

I also have some experience with using could platform, threfore I integrated firebase for authentication and AWS for managing production server.



## What technology I used

* React.js (Frontend) <br>
  - React router
  - Redux
* SCSS (UI designning)
* Semantic UI React (UI designning)
* Node.js (Backend)
* PM2 (To demonize a process)
* Firebase (Authentication)
* AWS EC2 (As Production Server)
  - Route53
  - Elastic IP
  - Loadbalancer
  * VPC is default VPC


## Structure of this application.

![image](https://user-images.githubusercontent.com/55787141/74638441-d9e05480-51a6-11ea-8653-20280098e5b4.png)



## Feature 

 * Display current weather by inputting zipcode
 * Registration/Login/Signout account
 * Restore password
 * Connect LINENotify
 * Send notification 
 * Stop sending notification



## Before start using App

1. If you will using notification function, you need to download LINE from [app store.](https://line.me/en-US/download)

2. Create account for LINE(Please register your email address).

3. Add LINENotify as your friend.(LINENotify is the one notify you.)
![image](https://user-images.githubusercontent.com/55787141/74505415-09d2f200-4f32-11ea-9cca-9d1d4e1090b2.png)

You can scan QR code in the picture.

4. Now ready to use weather-app.



## App URL

Please click URL below to access weather-app.

https://soma-dev0808.github.io/weather-demo/



## LICENSE

[MIT LICENSE](https://github.com/Soma-dev0808/weather-demo/blob/master/LICENSE)
