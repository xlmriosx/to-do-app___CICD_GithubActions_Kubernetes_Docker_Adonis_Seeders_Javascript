/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { message: 'can you check this service v2 with postman' }
})

Route.get('/health-check', async () => {
  return { status: 'ok' }
})

Route.group(() => {

  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
  
  Route.group(() => {
    Route.get("todos", "TodosController.index");
    Route.get("todos/:id", "TodosController.show");
    Route.put("todos/update", "TodosController.update");
    Route.post("todos", "TodosController.store");
  }).middleware("auth:api");
      
}).prefix("/api");
