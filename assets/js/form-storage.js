//form storage
var formStorage = { 
    //form storage init
    init: function() {
        formStorage.bindEvents();
    },  
    //bind events
    bindEvents: function() {
        //on form submit
        $('form').on('submit', function() {
            formStorage.saveForm(this);
        });
        //on form load
        $('form').each(function() {
            formStorage.loadForm(this);
        });
    },
    //save form
    saveForm: function(form) {
        var formId = $(form).attr('id');
        var formValues = $(form).serialize();
        localStorage.setItem(formId, formValues);
    }
    //load form
    loadForm: function(form) {
        var formId = $(form).attr('id');
        var formValues = localStorage.getItem(formId);
        if (formValues !== null) {
            var formArray = formValues.split('&');
            $.each(formArray, function(i, val) {
                var formField = val.split('=');
                var formFieldName = formField[0];
                var formFieldValue = formField[1];
                var formField = $('[name=' + formFieldName + ']', form);
                var formFieldType = formField.attr('type');
                switch (formFieldType) {
                    case 'radio':
                        $('[name=' + formFieldName + '][value=' + formFieldValue + ']', form).prop('checked', true);
                        break;
                    case 'checkbox':
                        $('[name=' + formFieldName + '][value=' + formFieldValue + ']', form).prop('checked', true);
                        break;
                    default:
                        formField.val(formFieldValue);
                }
            });
        }
        