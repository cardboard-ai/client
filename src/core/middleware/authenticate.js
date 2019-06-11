export default function(context) {
    // eslint-disable-next-line
    axios.get('http://127.0.0.1:8000/api/user')
        .then(function(response) {
            if (response.data instanceof Object) {
                localStorage.setItem('user', JSON.stringify(response.data));

                return context.next();
            }

            context.next('/');
        })
        .catch(function(error) {
            //
        });

    if (user instanceof Object) {
        context.next();
    }
}
