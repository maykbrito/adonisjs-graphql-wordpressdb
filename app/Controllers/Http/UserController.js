// const Database = use('Database');
const User = use('App/Models/User');

class UserController {
  async index(request, response) {
    return User.query()
      .with('posts')
      .fetch();
  }
}

module.exports = UserController;
