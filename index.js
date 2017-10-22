/* eslint-disable global-require */
module.exports = {
  frontend: {
    users: require('./frontend/users'),
    usersProfile: require('./frontend/users-profile'),
    usersDojos: require('./frontend/users-dojos'),
    applications: require('./frontend/applications'),
    locales: require('./frontend/locales.js'),
    db: require('./frontend/db'),
  },
  backend: {
    applications: require('./backend/applications.json'),
    children: require('./backend/children.json'),
    dojoLeads: require('./backend/dojo-leads.json'),
    dojoMembers: require('./backend/dojo-members.json'),
    dojos: require('./backend/dojos.json'),
    events: require('./backend/events.json'),
    polls: require('./backend/polls.json'),
    users: require('./backend/users.json'),
  },
};
