module.exports = {
  tableName: 'Comment',

  attributes: {
    status: {
      type: 'string'
    },
    userId :{
      type: 'string'
    },
    subjectId :{
      type: 'ObjectId'
    },
    subjectType :{
      type: 'string'
    },
    content: {
      type: 'string'
    },
    created: {
      type: 'integer'
    }
  }
};

