import { server } from './server'
import { startStandaloneServer } from '@apollo/server/standalone';

startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
});