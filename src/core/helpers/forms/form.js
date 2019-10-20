import { omit, has } from 'underscore';

/**
 * Form helper class.
 */
window.Form = function(data, component) {
    var form = this;

    /**
     * Initialize the form error class.
     */
    // eslint-disable-next-line
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
        return component.$validator.validate(formName)
            .then(result => {
                startProcess();

                // First validate the frontend
                if (!result) {
                    defineErrors(component.$validator.errors);

                    return false;
                }
                // Prepare the form data by removing default properties
                let formData = omit(this, ['errors', 'running', 'successful']);

                // Execute the Axios request and process the backend validation
                // eslint-disable-next-line
                return new Promise(function(resolve, reject) {
                    axios({ method: method, url: uri, data: formData }).then(response => {
                        stopProcess();

                        resolve(response);
                    })
                    .catch(err => {
                        if (err.response.status === 401) {
                            localStorage.removeItem('user');
                        }

                        defineErrors(err.response.data.errors);
                    });
                });
            });
    };

    /**
     * Open the form as POST and specify its URI and form instance.
     */
    this.post = function(uri, formName = null) {
        return this.open('post', uri, formName);
    };
};
