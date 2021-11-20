(function($) {
    $.fn.validate = function(options) {

        let settings = $.extend({
            textId = null,
            textMin = 1,
            textMax = "max",

            numberId = null,
            numberMin = 1,
            numberMax = "max",
            numberNeg = true,

            phoneId = null,
            phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,

            emailId = null,
            emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/,

            passwordId = null,
            matchId = null,

            passwordMin = 1,
            passwordMax = "max",
            passwordCaps = true,
            passwordSymbols = true,
            passwordNumbers = true

        }, options)

        return this.each(function() {
            
            let isValid = true;

            // Text validator
            const textId = settings.textId;
            if (text != null) {
                const text = $(textId).val().trim();
                if (text == "") {
                    $(textId).next().text("This field is required.");
                }
                else if (textMax != "max") {
                    if (text.length > textMax) {
                        $(textId).next().text(`This field must have no more than ${textMax} characters.`);
                    }
                }
                else if (text.length < textMin) {
                    $(textId).next().text(`This field must have at least ${textMin} characters.`);
                }
                else {
                    $(textId).next().text("");
                }
                $(textId).val(text);
            }

            // Number validator
            const numberId = settings.numberId;
            if (numberId != null) {
                const number = $(numberId).val().trim();
                if (number == "") {
                    $(numberId).next().text("This field is required.");
                    isValid = false;
                }
                else if (isNaN(number)) {
                    $(numberId).next().text("Must be numeric.");
                    isValid = false;
                }
                else {
                    $(number).next().text("");
                }
                $(numberId).val(number);
            }

            // Phone Number validator
            const phoneId = settings.phoneId;
            if (phoneId != null) {
                const phone = $(phoneId).val().trim();
                if (phone == "") {
                    $(phoneId).next().text("This field is required.");
                    isValid = false;
                }
                else if (!phonePattern.test(phone)) {
                    $(phoneId).next().text("Must be a valid phone number.");
                }
                else {
                    $(phone).next().text("");
                }
                $(phoneId).val(phone);
            }

            // Email validator
            const emailId = settings.emailId;
            if (emailId != null) {
                const email = $(emailId).val().trim();
                if (email == "") {
                    $(emailId).next().text("This field is required.");
                    isValid = false;
                }
                else if (!emailPattern.test(email)) {
                    $(emailId).next().text("Must be a valid email address.");
                    isValid = false;
                }
                else {
                    $(emailId).next().text("");
                }
                $(emailId).val(email);
            }
            // Password validator
            const passwordId = settings.passwordId;
            const matchId = settings.matchId;


            if (isValid == false) {
                evt.preventDefault();
            }
        })
    }
}(jQuery));