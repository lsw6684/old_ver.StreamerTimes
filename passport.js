import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// serialization : 어떤 정보를 쿠키에 주느냐
// deserialization : 쿠키 정보를 어떻게 사용자로 전환 하느냐