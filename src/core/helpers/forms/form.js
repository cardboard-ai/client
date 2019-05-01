/**
 * Form helper class.
 */
window.Form = function (data) {
    var form = this;

    _.extend(this, data);

    /**
     * Initialize the form error class.
     */
    this.errors = new FormErrors();

    this.working = false;
    this.successful = false;

    /**
     * Set the working variable to true.
     */
    this.workingProcess = function () {
        form.errors.forget();
        form.working = true;
        form.successful = false;
    };

    /**
     * Set the successful variable to true.
     */
    this.finishProcess = function () {
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
    this.defineErrors = function (errors) {
        form.working = false;
        form.errors.set(errors);
    };
};
