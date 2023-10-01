import { StrategyOptions } from 'passport-github'

export interface AppConfig {
  isDevelopment: boolean
  hostingURL: string
  github: StrategyOptions
  instagram: StrategyOptions
}

const getOAuthUrls: (
  hostName: string,
  app: string
) => { callbackURL: string } = (hostName: string, app: string) => ({
  // Alternatively, use `[app].ts` filenames for paramaterized urls
  callbackURL: `${hostName}/api/auth/callback/${app}`,
})
//https://d7f1-24-48-95-146.ngrok-free.app/api/auth/callback/instagram
const isDevelopment = process.env.NODE_ENV !== 'production'
const hostingURL = process.env.HOSTING_URL || 'http://localhost:3000'

const appConfig: AppConfig = {
  isDevelopment,
  hostingURL,
  github: {
    passReqToCallback: false,
    clientID: process.env.GITHUB_CLIENTID as string,
    clientSecret: process.env.GITHUB_CLIENTSECRET as string,
    ...getOAuthUrls(hostingURL, 'github'),
    scope: 'user:email',
  },
  instagram: {
    passReqToCallback: false,
    clientID: process.env.INSTAGRAM_CLIENTID as string,
    clientSecret: process.env.INSTAGRAM_CLIENTSECRET as string,
    ...getOAuthUrls(hostingURL, 'instagram'),
    scope: 'user_profile',
  }
}

export default appConfig