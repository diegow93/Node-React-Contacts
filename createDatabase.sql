CREATE TABLE account(
   id SERIAL PRIMARY KEY,
   firstname VARCHAR (40) NOT NULL,
   lastname VARCHAR (40) NOT NULL,
   address VARCHAR (40) NOT NULL,
   phonenumber VARCHAR (40) UNIQUE NOT NULL
); 
