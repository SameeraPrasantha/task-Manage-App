# task-Manage-App

## I used these frameworks to create this project
- Laravel
- React
- Redux
## Before check these things are available on your PC
- Node.js 
- PHP
- MySQL
- Apache Server
- if you are installing XAMMP you do not need to install (PHP, MySQL, or Apache Server)
## How to run Software
- Go to the Server Folder and extract the zip file (In XAMMP C:\XAMMP\htdoc\)
- open phpmyadmin and import the database file
- Run the Apache and MySQL
- After going to the root folder (taskManagerApp)
- Open Terminal (cmd, PowerShell)
- type <code>npm run start</code>
- All most done...

## If you have some trouble cloning and running the software please do that.
- ## Backend
- Go back folder open the terminal run these steps
- Run <code>composer install</code> on your cmd or terminal
- Copy the <code>.env.example</code> file to <code>.env</code> on the root folder
- Open your <code>.env</code> file and change the database name (DB_DATABASE) to whatever you have, the username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration
- Run <code>php artisan key:generate</code>
- Run <code>php artisan migrate</code>
- Run <code>php artisan serve</code>

- ## Frontend
- Go back folder open the terminal run these steps
- <code>npm install react-scripts --save</code>

# Thank you.!
