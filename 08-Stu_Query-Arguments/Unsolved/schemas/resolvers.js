const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('classes').populate({
        path: 'classes',
        populate: 'professor'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    
    // TODO: Add a new resolver for a single Class object
    class: async (_, args) => {
      return await Class.findById(args.id).populate('professor');
    },

    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  },
  Mutation: {
    addSchool: async (parent, {name, location, studentCount}) => {
      return await School.create({ name, location, studentCount });
    },
    updateSchool: async (parent, {id, name, location, studentCount}) => {
      const school =  await School.findByIdAndUpdate(id, { name, location, studentCount }, { new: true });
      console.log(school);
      return school;
    }
  }
};

module.exports = resolvers;
