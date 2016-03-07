/**
 * StoryController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  view: function (req, res) {
    var slug = req.param('slug').toLowerCase();
    Story.find({slugLowerCase: slug, status: 'active'}).then(function (stories) {
      if (!stories) {
        return res.notFound();
      } else {
        var story = stories[0];
        return User.find({id:  story.userId.toString()}).then(function (users) {
          var user = users[0];
          return res.view('story/view', {story: story, user: user, title: story.title});
        })
      }
    });
  }
};

