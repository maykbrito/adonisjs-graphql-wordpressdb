/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Post extends Model {
  static get table() {
    return 'wpWPA_posts';
  }

  static get primaryKey() {
    return 'ID';
  }

  static get createdAtColumn() {
    return null;
  }

  static get updatedAtColumn() {
    return null;
  }

  user() {
    return this.belongsTo('App/Models/User', 'post_author', 'ID');
  }
}

module.exports = Post;
