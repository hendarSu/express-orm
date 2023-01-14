const { Article } = require("./models");
const dbOptions = {
    where: { id: 4 }
};
Article.update({
    title : "Update Title"
},
dbOptions).then(() => {
    console.log("Update Success!");
    process.exit();
}).catch((err) => {
    console.log("Update unsuccess!");
    console.log(err);
})