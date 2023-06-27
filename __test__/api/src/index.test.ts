import { ApolloServer } from '@apollo/server'
import { schema } from '../../../packages/api/src/schema'
import { strict as assert } from 'assert';

it('returns hello with the provided name', async () => {
  const testServer = new ApolloServer({
    schema
  });

  const response = await testServer.executeOperation({
    query: 'query GetClinicalTrials($name:String!){clinicalTrials(name:$name){end_date name sponsor start_date}}',
    variables: { name: 'Sanofi' },
  });

  // Note the use of Node's assert rather than Jest's expect; if using
  // TypeScript, `assert`` will appropriately narrow the type of `body`
  // and `expect` will not.
  assert(response.body.kind === 'single');
  expect(response.body.singleResult.errors).toBeUndefined();
  expect(response.body.singleResult.data?.clinicalTrials).toBeDefined();
});