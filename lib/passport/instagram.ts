import { Strategy as InstagramStrategy } from "passport-instagram";
import appConfig from "../appConfig";
import axios from "axios";

// in api handlers after authentication.
const strategy = new InstagramStrategy(
  appConfig.instagram,
  async (accessToken, refreshToken, profile, cb) => {
    const profileInfo = await axios.get(
      `https://api.hikerapi.com/v1/user/by/username?username=${profile.username}`,
      {
        headers: {
          accept: "application/json",
          "x-access-key": process.env.HIKER_API_CLIENTSECRET,
        },
      }
    );
    profile.hikerId = profileInfo.data.pk;
    profile.full_name = profileInfo.data.full_name;

  console.log("profile", profile);

    cb(null, { accessToken, profile });
  }
);

export default strategy;
