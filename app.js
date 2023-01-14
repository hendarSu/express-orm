const express = require("express");
const app = express();
const { Article } = require("./models");

app.use(express.json());

/**
 * Router Create Article
 */
app.post("/articles", (req, res) => {
    const { title, body, approved } = req.body;
    Article.create({
        title,
        body,
        approved
    }).then((data) => {
        res.status(201).json(data);
    })
});

/**
 * Router update Article
 */
app.put("/articles/:id", (req, res) => {
    const { title, body } = req.body;
    Article.update({
        title,
        body
    }, {
        where : {
            id : req.params.id
        }
    }).then((data) => {
        res.status(201).json(data);
    })
});

/**
 * This is function for get articles
 */
app.get("/articles", (req, res) => {
    Article.findAll().then((data) => {
        res.status(200).json(data);
    })
});

/**
 * for get articles by id
 */
app.get("/articles/:id", (req, res) => {
    Article.findOne({
        where : {
            id: req.params.id
        }
    }).then(data => {
        res.status(200).json(data);
    })
});

/**
 * Function for update articles
 */
app.patch("/articles/unapproved/:id", (req, res) => {
    Article.update({
        approved: false
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(202).json({
            message: "Uppdate to unapproved success!"
        });
    })
})

app.patch("/articles/approved/:id", (req, res) => {
    Article.update({
        approved: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.status(202).json({
            message: "Uppdate to approved success!"
        });
    })
})

app.delete("/articles/:id", (req, res) => {
    const id = req.params.id;
    Article.destroy({
        where : {
            id: id
        }
    }).then(() => {
        res.status(202).json({
            message: `Delete article id ${id} success!`
        });
    })
})

app.listen(3000, () => {
    console.log("Apps running on port 3000!");
})

