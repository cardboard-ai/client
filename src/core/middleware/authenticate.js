/**
 * Retrieve each middleware from the current route.
 */
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
