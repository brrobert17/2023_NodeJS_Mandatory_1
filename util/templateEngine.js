import fs from "fs";

const sideBar = fs.readFileSync("./public/components/sideBar.html").toString()
    .replace('$Footer', `© ${new Date().getFullYear()}`);

function addPageTitle(pageTitle) {
    return sideBar.replace("$PAGETITLE", pageTitle);
}
export const renderPage = (config) => {
    const pageContent = fs.readFileSync(config.pagePath).toString()
        .replace("$PAGETITLE", config.pageTitle);

    return (addPageTitle(config.pageTitle) + pageContent);
}

