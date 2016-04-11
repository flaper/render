"use strict";
var _ = require('lodash');
/**
 * StoryController
 *
 * @description :: Server-side logic for managing stories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  view: function (req, res) {
    let slug = req.param('slug').toLowerCase();
    let story = null;
    let comments = [];
    let users = {};
    Story.find({slugLowerCase: slug, status: 'active'})
      .then((stories) => {
        if (!stories.length) {
          res.notFound();
          return Promise.reject();
        } else {
          story = stories[0];
        }
      })
      .then(() => Comment.find({subjectId: story.id, status: 'active'}).sort('created DESC'))
      .then((data) => comments = data)
      .then(() => {
        let userIds = comments.map(comment => comment.userId.toString());
        userIds.push(story.userId.toString());
        userIds = _.uniq(userIds);
        return User.find({id: userIds})
      })
      .then((data) => {
        users = _.keyBy(data, 'id');
      })
      .then(() => {
        return res.view('story/view', {
          story: story,
          user: users[story.userId],
          title: story.title,
          metaDescription: story.shortText,
          comments: comments,
          users: users
        });
      })
      .catch(() => {
        //nothing
      })
  }
};

