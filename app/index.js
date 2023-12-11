const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var models = require('./models');
const YAML = require('yamljs');
var path = require('path');
const swaggerUi = require('swagger-ui-express');
const url_swagger = path.resolve(__dirname, './swagger/swagger.yaml');
const swaggerDocument = YAML.load(url_swagger);

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

//Routes
app.use('/api/', moviesRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen('3000' , () => {
  console.log(`Server listen on http://localhost:3000`);
});
