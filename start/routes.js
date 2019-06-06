/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const GraphqlAdonis = use('ApolloServer');
const schema = require('../app/Data/schema');

Route.get('/', () => ({ greeting: 'Hello world in JSON' }));
Route.get('/users', 'UserController.index');

Route.route(
  '/graphql',
  ({ request, auth, response }) =>
    GraphqlAdonis.graphql(
      {
        schema,
        context: { auth },
      },
      request,
      response
    ),
  ['GET', 'POST']
);

Route.get('/graphiql', ({ request, response }) =>
  GraphqlAdonis.graphiql({ endpointURL: '/graphql' }, request, response)
);
