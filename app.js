import express from "express";
import {renderPage} from "./util/templateEngine.js";

const app = express();
const PORT = 8080;
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const homeConfig = {
    pagePath: "./public/pages/homePage.html",
    pageTitle: "HOME"
};
app.get("/", (req, res) => {
    res.send(renderPage(homeConfig));
})

const expressConfig = {
    pagePath: "./public/pages/expressPage.html",
    pageTitle: "Express"
};
app.get("/express", (req, res) => {
    res.send(renderPage(expressConfig));
})

const jsConfig = {
    pagePath: "./public/pages/jsPage.html",
    pageTitle: "JavaScript"
};
app.get("/js", (req, res) => {
    res.send(renderPage(jsConfig));
})

const nodeConfig = {
    pagePath: "./public/pages/nodePage.html",
    pageTitle: "Node.js"
};
app.get("/node", (req, res) => {
    res.send(renderPage(nodeConfig));
})

const restConfig = {
    pagePath: "./public/pages/restApiPage.html",
    pageTitle: "RestAPI"
};
app.get("/rest", (req, res) => {
    res.send(renderPage(restConfig));
})

const loginConfig = {
    pagePath: "./public/pages/loginPage.html",
    pageTitle: "Login"
};
app.get("/login", (req, res) => {
    res.send(renderPage(loginConfig));
})

const adminConfig = {
    pagePath: "./public/pages/adminPage.html",
    pageTitle: "Admin"
};
app.post("/api/login", (req,res) => {
    if(req.body.username === "0" && req.body.password === "0") {
        res.send(renderPage(adminConfig));
    } else {
        res.send("Wrong!");
    }
})

const adminNewPageConfig = {
    pagePath: "./public/pages/adminNewPage.html",
};
app.post("/api/admin", (req,res) => {
    adminNewPageConfig.pageTitle = req.body.pageTitle;
    res.send(renderPage(adminNewPageConfig).replace('$PAGECONTENT', req.body.textContent))
})

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("server running on port: " + PORT);
});