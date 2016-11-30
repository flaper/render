"use strict";
let _ = require('lodash');
let co = require('co');
/**
 * StoryController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  view: function (req, res) {
    let slug = req.param('slug').toLowerCase();

    co(function *() {
      let stories = yield Story.find({slugLowerCase: slug, status: 'active'});
      if (!stories.length)
        return res.notFound();
      let story = stories[0];
      let comments = yield Comment.find({subjectId: story.id, status: 'active'}).sort('created DESC');
      let userIds = comments.map(comment => comment.userId.toString());
      userIds.push(story.userId.toString());
      userIds = _.uniq(userIds);
      let users = yield User.find({id: userIds});
      users = _.keyBy(data, 'id');
      return res.view('story/view', {
        story: story,
        user: users[story.userId],
        title: story.title,
        metaDescription: story.shortText,
        comments: comments,
        users: users
      });
    });
  }
};

