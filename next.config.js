require('dotenv').config();
const { BRANCH, HYGRAPHCMSPROJECTID, HYGRAPHCMSURL } = process.env;

module.exports = {
  publicRuntimeConfig: {
    hygraph: {
      BRANCH,
      HYGRAPHCMSPROJECTID,
      HYGRAPHCMSURL,
    },
  },
};
