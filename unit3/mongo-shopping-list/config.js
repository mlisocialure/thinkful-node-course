exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://localhost/shopping-list' :
                            'mongodb://<dbuser>:<dbpassword>@ds019946.mlab.com:19946/thinkful-node');
exports.PORT = process.env.PORT || 8080;

