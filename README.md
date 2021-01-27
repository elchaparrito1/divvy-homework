# Quick Overview - Divvy Homework Assignment

This repository provides a starting point for a basic React + GraphQL application.
All of the configuration boilerplate is complete so you can start by writing the code that you want us to see.

## Project Details

This application provides the necessary frontend logic and design to perform the following tasks:
  - Interact with a basic user dashboard interface that allows users to enter, add, and remove transactions from an expense report
    - The dashboard also provides the ability to toggle transaction values between roman numerals and regular numbers for any cognomen that might want to use the    site
    - Additionally, a filter feature allows users to isolate certain expenditures based on in min and max values
    - Pagination for the table allows for a better user experience and review of transactions
  - View/navigate to doughnut pie chart of all current categories of expenditures and how much the amount of each category is
  - View/navigate to a user interface page where a list of users can be viewed, and their information modified
  - This user experience offers intuitive navigation, improved styling - with the help of emotion.js - and multiple routes for optional views
  
This application comes with the necessary backend logic but still requires the necessary design and engineering to connect it to the frontend. For instructions on how to get started on this portion, please review the Project Setup below.

## Technologies Used

The frontend of this application utilizes the ReactJS library for quick and easy use of JavaScript logic to design, build, and maintain components.

The frontend also comes with: Webpack preconfigured, other React APIs such as ReactDOM, and GraphQL configuration through Apollo.

The backend of this application comes with two paths of choice for the server architecture. One path is to use the file `/webserver`, which includes a functional GraphQL server in NodeJS with MongoDB backing it. The second path is to use the `/elixir` set up, which includes a functional GraphQL server in Elixir with Postgresql backing it.

## Project Setup

This repository is split into a web app directory (eg `/webapp`) and two server directories (eg `/webserver` and `/elixir`).

The `/webserver` one includes a functional GraphQL server in NodeJS with MongoDB backing it.

The `/elixir` one includes a functional GraphQL server in Elixir with Postgresql backing it.

This project is intentionally not utilizing 3rd party services or create-react-app to give you the opportunity to showcase your talents wherever they are, be it the front end or the back end.

## Installation Instructions

Frontend starter commands from root of project:
`cd webapp`
`yarn install`
`yarn start`

Backend start commands from root of project:
`cd webserver` or `cd elixir`
`yarn install`
`yarn start`

For further instructions of deliverables for this project:

See the [frontend instructions](frontend.md) for frontend focused instructions.

See the [backend instructions](backend.md) for backend focused instructions.




