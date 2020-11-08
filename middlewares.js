import routes from "./routes";

export const localsMiddle = (req, res, next) => {
    res.locals.siteName = "Streamer Times";
    res.locals.routes = routes;
    next();
};