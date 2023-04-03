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
const homePage = renderPage(homeConfig);
app.get("/", (req, res) => {
    res.send(homePage);
})

const expressConfig = {
    pagePath: "./public/pages/expressPage.html",
    pageTitle: "Express"
};
const expressPage = renderPage(expressConfig);
app.get("/express", (req, res) => {
    res.send(expressPage);
})

const jsConfig = {
    pagePath: "./public/pages/jsPage.html",
    pageTitle: "JavaScript"
};
const jsPage = renderPage(jsConfig);
app.get("/js", (req, res) => {
    res.send(jsPage);
})

const nodeConfig = {
    pagePath: "./public/pages/nodePage.html",
    pageTitle: "Node.js"
};
const nodePage = renderPage(nodeConfig);
app.get("/node", (req, res) => {
    res.send(nodePage);
})

const restConfig = {
    pagePath: "./public/pages/restApiPage.html",
    pageTitle: "RestAPI"
};
const restPage = renderPage(restConfig);
app.get("/rest", (req, res) => {
    res.send(restPage);
})

const loginConfig = {
    pagePath: "./public/pages/loginPage.html",
    pageTitle: "Login"
};
const loginPage = renderPage(loginConfig);
app.get("/login", (req, res) => {
    res.send(loginPage);
})

const adminConfig = {
    pagePath: "./public/pages/adminPage.html",
    pageTitle: "Admin"
};
const adminPage = renderPage(adminConfig);
app.post("/api/login", (req,res) => {
    if(req.body.username === "0" && req.body.password === "0") {
        res.send(adminPage);
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