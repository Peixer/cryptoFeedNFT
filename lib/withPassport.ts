import passport from "passport";
import cookieSession from "cookie-session";
import url from "url";
import redirect from "micro-redirect";
import { github, instagram } from "./passport";
import { UserIdentity } from "./withIdentity";
export { default as passport } from "passport";

passport.use(github);
passport.use(instagram);

export interface PassportSession {
  passport: { user: UserIdentity };
}

passport.serializeUser((user: UserIdentity, done) => {
  const { id, username } = user.profile;
  done(null, {
    profile: {
      id,
      username,
    },
    accessToken: user.accessToken,
  });
});
passport.deserializeUser(async (serializedUser, done) => {
  if (!serializedUser) {
    return done(new Error(`User not found: ${serializedUser}`));
  }

  done(null, serializedUser);
});

// export middleware to wrap api/auth handlers
export default (fn) => (req, res) => {
  if (!res.redirect) {
    res.redirect = (location: string) => redirect(res, 302, location);
  }

  cookieSession({
    name: "passportSession",
    signed: false,
    domain: url.parse(req.url).host,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })(req, res, () =>
    passport.initialize()(req, res, () =>
      passport.session()(req, res, () =>
        fn(req, res)
      )
    )
  );
};
