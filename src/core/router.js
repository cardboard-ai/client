import Router from 'vue-router';
import routes from './routes';

// Initiliaze Vue instance and routes
var router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

function getMiddleware(context, middleware, index) {
    const specifiedMiddleware = middleware[index];

    // Check whether there's middleware provided.
    if (typeof specifiedMiddleware === 'undefined') {
        return context.next;
    }

    return (...parameters) => {
        context.next(...parameters);

        const nextMiddleware = getMiddleware(context, middleware, index);
        specifiedMiddleware({ ...context, next: nextMiddleware });
    };
};

/**
 * Pass for each route the specified middleware.
 */
router.beforeEach((to, from, next) => {
    if (typeof to.meta.middleware !== 'undefined') {
        const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };

        const nextMiddleware = getMiddleware(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

export default router;
