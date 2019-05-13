/**
 * Form helper class.
 */
window.Form = function (data, component) {
    var form = this;

    // _.extend(this, data);

    /**
     * Initialize the form error class.
     */
    this.errors = new FormErrors();

    this.working = false;
    this.successful = false;

    /**
     * Set the working variable to true.
     */
    function workingProcess () {
        form.errors.forget();
        form.working = true;
        form.successful = false;
    };

    /**
     * Set the successful variable to true.
     */
    function finishProcess () {
        form.working = false;
        form.successful = true;
    };

    /**
     * Forget the errors.
     */
    this.resetErrors = function () {
        form.errors.forget();
        form.working = false;
        form.successful = false;
    };

    /**
     * Define the errors on the form.
     */
    function defineErrors (errors) {
        form.working = false;
        form.errors.set(errors);
    };

    /**
     * Open the form and specify it's HTTP method and URI.
     */
    this.open = function (method, uri, formName = null) {
        component.$validator.validate(formName).then((result) => {
            workingProcess();

            // First validate the frontend
            if (!result) {
                defineErrors(component.$validator.errors);

                return false;
            }

            // Define the URL based on the environment base URL and given URI
            // var url = process.env.BASE_URL + uri;

            // Prepare the form data by removing default properties
            var formData = _.omit(this, ['errors', 'working', 'successful']);

            // Execute the Axios request and process the backend validation
            axios({ method: method, url: uri, data: formData })
            .then(response => {
                finishProcess();
            })
            .catch(err => {
                defineErrors(err.response.data.errors);
            });
        });
    }
};
