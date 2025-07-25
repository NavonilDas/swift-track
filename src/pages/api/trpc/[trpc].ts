import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/router/_app';

// export API handler
// @link https://trpc.io/docs/v11/server/adapters
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({ user: null }),
  onError({error}) {
    console.log(error)
  }
});