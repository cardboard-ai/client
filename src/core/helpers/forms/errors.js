import { ErrorBag } from 'vee-validate';

/**
 * Form error collection class.
 */
window.FormErrors = function() {
    this.errors = {};

    /**
     * Determine whether the form has the specific error.
     */
    this.has = function(field) {
        return _.indexOf(_.keys(this.errors), field) > -1;
    };

    /**
     * Retrieve the first specific error message.
     */
    this.get = function(field) {
        if (this.has(field)) {
            var errors = this.errors[field][0].toString();
            return errors.charAt(0).toUpperCase() + errors.slice(1);
        }
    };

    /**
     * Set the back-end errors in the collection.
     */
    this.set = function(errors) {
        if (errors instanceof ErrorBag) {
            var obj = [];
            var errors = _.mapObject(errors.items, function(val) {
                obj[val['field']] = [val['msg']];

                return obj;
            });

            this.errors = errors[0];
        } else if (typeof errors === 'object') {
            this.errors = errors;
        } else {
            this.errors = {
                form: ['Something went wrong, please contact the site admin.']
            };
        }
    };

    /**
     * Delete the errors from the collection.
     */
    this.forget = function(field) {
        if (typeof field === 'undefined') {
            this.errors = {};
        } else {
            Vue.delete(this.errors, field);
        }
    };
};
