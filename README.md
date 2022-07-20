# Project REST-Rant

### Overview
REST-Rant is an app where users can review restaurants.
This website is fully navigatable with the endpoints listed at the bottom of the README. 
The PLACES page is where all of the restaurants in the MongoDB database are displayed, a picture for each restaurant, as well as the city and state they are located in. 

### Demo
REST-Rant is deployed here at https://pumpkin-tart-95991.herokuapp.com/

### Technologies Used
HTML, CSS, JavaScript, React, Express, Node.js, Mongoose, MongoDB

### Installation 
If you could like to clone this repository:
1) fork and clone into your project folder or wherever you would like to store it
2) navigate to the project folder and open in preferred code editor (VsCode was used here)
3) open terminal in the project folder and run NPM install to download required dependencies 
4) run NPM start to run the project as well as database (you will probably need to connect it to your own MongoDB database by editing the package-lock.json and replacing my Mongo link with your own)



| Method | Path                     | Purpose                                          |
|--------|--------------------------|--------------------------------------------------|
| GET    | /                        | Home Page                                        |
| GET    | /places                  | Places Index Page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | From page for editing an existing place          |
| DELETE | /place/:id               | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above)   |

## Restaurants
| Name     | City          | State | Cuisines         | Pic |
|----------|---------------|-------|------------------|-----|
| Pizza Pi | San Jose      | CA    | Italian          | pic |
| JavaBean | San Mateo     | CA    | Coffee Shop      | pic |
| READMEat | San Diego     | CA    | Sandwich Shop    | pic |
| PromICE  | San Fransisco | CA    | Ice Cream Parlor | pic |
