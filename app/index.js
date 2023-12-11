const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var models = require('./models');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
require('dotenv').config();

models.sequelize.sync();

const app = express();

//Router Files
const moviesRouter = require('./routes/movies');

//Configurations
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//Cors
app.use(cors({
  origin: '*',
  methods: ['GET','POST', 'OPTIONS']
}));

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movies API',
      version: '1.0.0',
      description: 'A test Api',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

//Routes
app.use('/api/', moviesRouter);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(process.env.PORT ? process.env.PORT : '3000' , () => {
  console.log(`Server listen on http://localhost:3000`);
});
