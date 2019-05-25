/**
 * Form helper class.
 */
window.Form = function(data, component) {
    var form = this;

    // _.extend(this, data);

    /**
     * Initialize the form error class.
     */
    this.errors = new FormErrors();

    this.running = false;
    this.successful = false;

    /**
     * Set the working variable to true.
     */
    function startProcess() {
        form.errors.forget();
        form.running = true;
        form.successful = false;
    }

    /**
     * Set the successful variable to true.
     */
    function stopProcess() {
        form.running = false;
        form.successful = true;
    }

    /**
     * Forget the errors.
     */
    this.resetErrors = function() {
        form.errors.forget();
        form.running = false;
        form.successful = false;
    };

    /**
     * Define the errors on the form.
     */
    function defineErrors(errors) {
        form.running = false;
        form.errors.set(errors);
    }

    /**
     * Open the form and specify it's HTTP method and URI.
     */
    this.open = function(method, uri, formName = null) {
        component.$validator.validate(formName).then(result => {
            startProcess();

            // First validate the frontend
            if (!result) {
                defineErrors(component.$validator.errors);

                return false;
            }

            // Define the URL based on the environment base URL and given URI
            var url = process.env.VUE_APP_ROOT_API + uri;

            // Prepare the form data by removing default properties
            var formData = _.omit(this, ['errors', 'running', 'successful']);

            // Execute the Axios request and process the backend validation
            axios({ method: method, url: url, data: formData })
                .then(response => {
                    stopProcess();
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        localStorage.removeItem('user');
                    }

                    defineErrors(err.response.data.errors);
                });
        });
    };
};
