import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { lazy } from '@trpc/server';

export const appRouter = router({
    user: lazy(() => import('./User').then((m) => m.userRouter)),
    tracking: lazy(() => import('./Tracking').then((m) => m.default)),
    hello: publicProcedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            return {
                greeting: `hello ${opts.input.text}`,
            };
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;