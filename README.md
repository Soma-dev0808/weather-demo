# weather-demo

This application allows an user to check current weather, and notify weather info by LINENotify at specific time everyday if it's configured.
To receive notification, you have to sign up to this app.
You can see weather info in browser by input zipcode without registration or logging in.

<img src="https://user-images.githubusercontent.com/55787141/74496560-fa45b000-4f15-11ea-8a29-eca19641cd13.png" width="570" height="300">

<img src="https://user-images.githubusercontent.com/55787141/74497208-f581fb80-4f17-11ea-8c7d-f40ce0ddf5db.jpg" width="570" height="300">


## Why I created this app

This app is to show my skill of developing.
I've been developing frontend and backend(in here, I express nodejs as backend) so far in several projects.
Since that, I coded frontend and backend.


## What technology I used

・React.js (Frontend)
  - React router
・SCSS (UI designning)
・Semantic UI React (UI designning)
・Node.js (Backend)
・PM2 (To demonize a process)
・Firebase (Authentication)
・AWS EC2 (As Production Server)

Since this app's component structure is not complicated, I didin't use Redux.(In most of cases, it just need to pass props to child component.)


## Why React.js and Node.js? 

・React.js
This app is pretty simple and there's only a few differences between pages(meaning some of component are reusable), so I wanted to create simple and faster App.
React.js is fast because of the Virtual DOM which is the one of the biggest feature of React.js. Even though sometime we have to change a part of app, it can re-render only changed part. 
Components make app maintainanceable. We can develope an app with individual compoent. In addition to this, when I found a problem with my code, it's easy to make some changes. Also I reused one component for some situation.

・Node.js
The fast server side framework Node.js was matched my portfolio concepts which is fast app. It was also easy to learn and integrate it into app. I created soem API endpoints for LINEnotify and schedule job of notification.


## Before start using App

1. If you will using notification function, you need to download LINE from [app store.](https://line.me/en-US/download)

2. Create account for LINE(Please register your email address).

3. Add LINENotify as your friend.(LINENotify is the one notify you.)
![image](https://user-images.githubusercontent.com/55787141/74505415-09d2f200-4f32-11ea-9cca-9d1d4e1090b2.png)

4. Now ready to use weather-app.


## App URL

Please click URL below to access weather-app.

https://soma-dev0808.github.io/weather-demo/notification

