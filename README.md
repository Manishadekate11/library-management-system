# library-management-system

commiting by Manisha
this is a Library management Backend for the management of users and the books 

# Routes and the Endpoints

## /users
GET : Get all the list of the user in the system
POST: Create/Register a new user

## / users{id}
GET: Get a user by their ID
PUT: Updating a user by their ID
DELETE: Deleting a user by their ID (Check if the user still has an issued book) && {is there any fine/penalty to be collected}

## /users/subscription-details/{id}
GET: Get a user subscription details
  >> date of subscription
  >> Valid til ?
  >> Fine if any?

## /books 
GET: Get all the book in the system
POST: Add a new book to the system

## /books{id}
GET: Get a book by its ID 
POST: Add a new book to the system

## /books/{id}
GET: get a book by its id
PUT: Update a book by its ID
DELETE: Delete a book by its Id

## /book/issued
GET: Get all the issued books

## /books/issued/withFine
GET: Get all issued books with their fine amount

### Subscription Types
  >>Basic (3 month)
  >> Standard (6 months)
  >> Premium (12 months)

>> If a user missed the renewal date,then user should be collected with $100
>> If a user misses his subscription, than user is excepted to pay $100
>> If a user  both renewal & subscription, then the collected amount should be $200

## commands:
npm init 
npm i express
npm i nodemon --save-dev

 to run --npm run dev
to restore the node module and ackage-lical-json >> -- npm i/ npm install



