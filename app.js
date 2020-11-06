import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();  //express를 import한 값을 const로

//Middlewares
app.set('view engine', "pug");
app.use(cookieParser());    //cookie전달
app.use(bodyParser.json()); //웹사이트로 전달되는 정보 검사
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());          //security
app.use(morgan("dev"));     //logging

//Routers
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

//application 관련 코드들.
