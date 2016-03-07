/**
 * Story.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'Story',

  attributes: {
    status: {
      type: 'string'
    },
    userId :{
      type: 'integer'
    },
    title: {
      type: 'string'
    },
    contentHTML: {
      type: 'string'
    },
    slugLowerCase: {
      type: 'string'
    },
    created: {
      type: 'integer'
    }
  }
};

