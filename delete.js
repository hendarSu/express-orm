const { Article } = require("./models");

const dbOptions = {
    where : {
        id: 1
    }
}

Article.destroy(dbOptions).then(() => {
    console.log("Delete row data success!");
    process.exit();
}).catch(err => {
    console.log(err);
})