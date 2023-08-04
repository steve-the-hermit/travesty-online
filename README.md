# travesty-online
 ## I   ntroduction

"Travel Bucket List" is a single-page React application designed to help users create and manage their dream travel destinations. This project utilizes create-react-app for a smooth and user-friendly experience. The application is structured with five components, ensuring a well-organized and maintainable codebase. React Router is seamlessly integrated for client-side routing, allowing users to navigate between pages effortlessly. Additionally, the app utilizes json-server to handle RESTful API requests for travel destinations, ensuring efficient and reliable data management.

## Main Features
Destinations List Component:

Fetches travel destination data from the json-server and displays a captivating list of dream travel locations.
Each destination card showcases the location's name, an enticing image, and a brief description.
Users can click on a card to view more detailed information about the destination, including popular attractions, best time to visit, and travel tips.
Destination Details Component:

Displays in-depth information about a selected destination when users click on a destination card.
Provides details about landmarks, local culture, and essential travel advice.
Allows users to add the destination to their travel bucket list with a simple click.
Bucket List Component:

Displays a curated list of the user's selected travel destinations.
Fetches the bucket list data from the json-server, providing easy access to destination details.
Enables users to manage and update their travel plans with options to remove or add destinations.
Search Component:

Empowers users to quickly find travel destinations based on location names or specific keywords.
Makes GET requests to the json-server to retrieve matching destinations for display.
Provides a user-friendly search feature for exploring new and exciting travel destinations.
Add Destination Component:

Enables users to add their dream travel destinations to their bucket list.
Users can effortlessly create new entries with essential location details, captivating descriptions, and delightful images.
Utilizes POST requests to the json-server for seamless data storage.
 #   Installation and Setup
Clone this repository to your local machine.
Navigate to the project directory and install dependencies using npm install.
Start the json-server by running json-server --watch db.json --port 3002 in a separate terminal window.
Start the React app with npm start.
The app will open in your default browser at http://localhost:3002.


## Technologies Used
React
React Router
json-server
### Authors
Steve Austin 
Krystal Mark
Dreake Ntimama
Steve Macharia