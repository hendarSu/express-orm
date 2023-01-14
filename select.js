const { Article } = require('./models');

Article.findAll().then((data) => {
    console.log(data);
});