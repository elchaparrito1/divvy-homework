# Divvy Homework Assignment

This repository provides a starting point for a basic React + GraphQL application.
All of the configuration boilerplate is complete so you can start by writing the code that you want us to see.

Please **fork** this repo to your GitHub account.

## Quick Overview

This application provides the necessary frontend logic and design to perform the following tasks:
  - Interact with a basic user dashboard interface that allows users to enter, add, and remove transactions from an expense report
    - The dashboard also provides the ability to toggle transaction values between roman numerals and regular numbers for any cognomen that might want to use the    site
    - Additionally, a filter feature allows users to isolate certain expenditures based on in min and max value
    - Pagination for the table allows for a better ui experience
  - View/navigate to doughnut pie chart of all current categories of expenditures and how the amount of each category
  - View/navigate to a Users interface page where a list of users can be moved, and their information modified
  - This user experience offers intuitive navigation, improved styling - with the helpd of emotion.js - and multiple routes for optional views
  
This application comes with the necessary backend logic but still requires the necessary design and engineering to connect it to the frontend. For instructions on how to get started on this portion, please review the Project Setup below.

## Technologies Used

The frontend of this application utilizes the ReactJS library for quick and easy use of JavaScript logic to design, build, and maintain components.

The frontend also comes with Webpack preconfigured, other React APIs such as ReactDOM, and GraphQL configuration through Apollo.

The backend of this application comes with two paths of choice for the server architecture. One path is to use the file `/webserver`, which includes a functional GraphQL server in NodeJS with MongoDB backing it. The second path is to use the `/elixir` set up, which includes a functional GraphQL server in Elixir with Postgresql backing it.

## Project Setup

This repository is split into a web app directory (eg `/webapp`) and two server directories (eg `/webserver` and `/elixir`).

The `/webserver` one includes a functional GraphQL server in NodeJS with MongoDB backing it.

The `/elixir` one includes a functional GraphQL server in Elixir with Postgresql backing it.

If you are applying for backend, you should use the elixir code.
If you are applying for frontend, feel free to use either.

This project is intentionally not utilizing 3rd party services or create-react-app to give you the opportunity to showcase your talents wherever they are, be it the front end or the back end.

**Node** version **12** is the safest NodeJS release to use.  You can try version 14, but there can be node-gyp/python issues on OSX.

## Installation Instructions

See the [frontend instructions](frontend.md) for frontend focused instructions.

See the [backend instructions](backend.md) for backend focused instructions.




