/**
 * StoryController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  last: function (req, res) {
    Story.find({where: {status: 'active'}, limit: 20, sort: 'created DESC'}).then(function (stories) {
      return res.view('home', {stories: stories});
    });
  }
};

