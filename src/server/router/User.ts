import { router, publicProcedure } from '../trpc';
 
export const userRouter = router({
  list: publicProcedure.query(() => {
    return ['John', 'Jane', 'Jim'];
}),
});