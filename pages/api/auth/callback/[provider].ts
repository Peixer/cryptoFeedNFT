import { NextApiResponse, NextApiRequest } from 'next'
import withPassport, { passport } from '../../../../lib/withPassport'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { provider, code } = req.query
  if (!provider) {
    return { statusCode: 404 }
  }
  passport.authenticate(provider, {
    failureRedirect: '/auth',
    successRedirect: '/',
    failWithError: true,
  })(req, res, (...args) => {
    console.log('auth callback', args)
    return true
  })
}

export default withPassport(handler)
