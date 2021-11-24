(function($) {
    $.fn.validator = function(options) {

        let settings = $.extend({
            type: null,

            min: 1,
            max: "max",
            neg: true,
            caps: true,
            symbols: true,
            numbers: true,
            phonePattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
            emailPattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/,
            matchId: null,
        }, options)

        return this.each(function() {
            // Get id of element
            const id = `#${this.getAttribute('id')}`

            $("#submit").click( evt => {

                let isValid = true;

                // Text validator
                if (settings.type == "text") {
                    const text = $(id).val().trim();
                    if (text == "") {
                        $(id).next().text("This field is required.");
                    }    
                    else if (settings.max != "max") {
                        if (text.length > settings.max) {
                            $(id).next().text(`This field must have no more than ${settings.max} characters.`);
                        }
                    }
                    else if (text.length < settings.min) {
                        $(id).next().text(`This field must have at least ${settings.min} characters.`);
                    }
                    else {
                        $(id).next().text("");
                    }
                    $(id).val(text);
                    
                }
                // Number validator
                else if (settings.type == "number") {
                    const number = $(id).val().trim();
                    if (number == "") {
                        $(id).next().text("This field is required.");
                        isValid = false;
                    }
                    else if (isNaN(number)) {
                        $(id).next().text("Must be numeric.");
                        isValid = false;
                    }
                    else if (settings.max != "max") {
                        if (number.length > settings.max) {
                            $(id).next().text(`This field must have no more than ${settings.max} characters.`);
                        }
                    }
                    else if (number.length < settings.min) {
                        $(id).next().text(`This field must have at least ${settings.max} characters.`);
                    }
                    else {
                        $(number).next().text("");
                    }
                    $(id).val(number);              
                }
                // Phone validator
                else if (settings.type == "phone") {
                    const phone = $(id).val().trim();
                    if (phone == "") {
                        $(id).next().text("This field is required.");
                        isValid = false;
                    }
                    else if (!phonePattern.test(phone)) {
                        $(id).next().text("Must be a valid phone number.");
                    }
                    else {
                        $(phone).next().text("");
                    }
                    $(id).val(phone);
                    }
                // Email validator 
                else if (settings.type == "email") {    
                    const email = $(id).val().trim();
                    if (email == "") {
                        $(id).next().text("This field is required.");
                        isValid = false;
                    }
                    else if (!emailPattern.test(email)) {
                        $(id).next().text("Must be a valid email address.");
                        isValid = false;
                    }
                    else {
                        $(id).next().text("");
                    }
                    $(id).val(email);
                }
                // Password validator
                else if (settings.type == "password") {            
                    const password = $(id).val().trim();
                    if (password == "") {
                        $(id).next().text("This field is required.");
                    }
                    else if (settings.max != "max") {
                        if (text.length > settings.max) {
                            $(id).next().text(`This field must have no more than ${settings.max} characters.`);
                        }
                    }
                    else if (text.length < settings.min) {
                        $(id).next().text(`This field must have at least ${settings.min} characters.`);
                    }
                    else {
                        $(id).next().text("");
                    }
                    $(id).val(password);
                }
    
                if (settings.matchId != null) {
                    const match = $(settings.matchId).val().trim();
                }

                if (isValid == false) {
                    evt.preventDefault();
                }
            })  
        })
    }
}(jQuery));