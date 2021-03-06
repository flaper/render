module.exports = {
  tableName: 'Story',

  attributes: {
    status: {
      type: 'string'
    },
    userId :{
      type: 'ObjectId'
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

