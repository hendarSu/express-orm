const { Article } = require('./models');

Article.create({
    title : "Judul Article",
    body: "Lorem ipsum babdab adbabd",
    approved: true
}).then((data) => {
    console.log(data);
});