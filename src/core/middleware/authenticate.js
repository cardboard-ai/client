export default function(context) {
    // eslint-disable-next-line
    axios.get('user')
        .then(function(response) {
            if (response.data instanceof Object) {
                localStorage.setItem('user', JSON.stringify(response.data));

                return context.next();
            }

            context.next('/');
        })
        .catch(function(error) {
            // Do nothing
        });

    if (user instanceof Object) {
        context.next();
    }
}
