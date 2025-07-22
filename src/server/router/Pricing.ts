import { router, publicProcedure } from '../trpc';


const pricingRoutes = router({
    index: publicProcedure.query(() => {
        return '';
    }),
});


export default pricingRoutes;