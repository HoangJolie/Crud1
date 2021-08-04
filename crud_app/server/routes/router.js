const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root route
 * @method get/
 */

route.get('/',services.homeRoutes)

/**
 * @description add user 
 * @method get/ add-user
 */

route.get('/add-user', services.add_user)

/**
 * @description update user
 * @method get/ update-user
 */

route.get('/update-user',services.update_user)

// Api su dung bodyparser post, get, put, delete

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route
