# The-Duck-Repository
This is a take home assignment to be completed for FreshWorks.io

## Author
Chiyedza Mugavazi

## Build With
This project was built with the following technologies:
- Vue.js
- Node.js
- ExpressJS
- MySQL
- BootstrapVue

## Prerequisites
- MySQL Workbench
    - The script for the database is located in the root directory under database/createDB.sql. Please run this script in mysql first
    - Then, in the file database.js that is located in the root directory, please fill in the appropriate information so that your database can successfully connect with the backend


## Running Locally
To run the web application locally, please install the necessary npm packages with:
```bash
npm install
```

Once the necessary packages have been installed, the below commands will run the web application locally
```bash
npm start 
```
which is an alias for the following commands in package.json:
```bash
npm run build && node index.js
```
