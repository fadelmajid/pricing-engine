Pricing Engine
==============

SETUP
------------------------------------------------
1. Make sure you've configured node.js in your local
2. Setup your db using postgres, credentials located in `config/` folder
3. In the terminal, run `npm install`
4. in the terminal, run migration using `sequelize db:migrate`
5. in the terminal, run seeder using `sequelize db:seed:all`
6. in the terminal, run `npm start` or `nodemon server.js`

POSTMAN Collection and Environment
------------------------------------------------
available on folder `postman/`, you can import all the file to postman. (examples of inputs and outputs are available)


LOGIC EXPLANATION
------------------------------------------------
1. User / other services need to send `skuId` and `customerId`
2. When pricing engine receives those information
3. Pricing engine will:
4. Get historical PO data and analyze it, looking for average price, pricing trend, and customer preferences (if `customerId` is provided, if not provided will use general pricing information)
5. Get pricelist information
6. Based on historical PO data analysis and pricelist information, pricing engine will do combine analysis
7. and it will return the optimum price