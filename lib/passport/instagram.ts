import { Strategy as InstagramStrategy } from 'passport-instagram'
import appConfig from '../appConfig'

// in api handlers after authentication.
const strategy = new InstagramStrategy(
  appConfig.instagram,
  (accessToken, refreshToken, profile, cb) => {

    cb(null, {accessToken, profile})
  }
)

export default strategy
