# BidApp
A node-based web application for online bid.

# Environment
Node.js, Express.js and MongoDB are required.

You can check package.json for other dependencies, e.g., body-parser, ejs and mongoose.

Before running app.js with node to start the server, please run the "init_my_db.js" file first to initialize the asset data (26 different alphabets as names with the same price 1). The table on the homepage will be populated with values from the database. Ajax request is used to submit the bid value to the server/database. When the response is generated, it will then use the response to edit the price. After that, the program will verify whether the updated price matches user's bid input value or not.
