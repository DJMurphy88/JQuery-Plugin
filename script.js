    $("#text").validator({
        type: "text"
    });

    $("#text2").validator({
        type: "text"
    });

    $("#number").validator({
        type: "number",
        neg: "False"
    })

    $("#phone").validator({
        type: "phone"
    })

    $("#email").validator({
        type: "email",
    })
    
    $("#email_match").validator({
        type: "match",
        parentField: "#email"
    })

    $("#password").validator({
        type: "password",
    })

    $("#password_match").validator({
        type: "match",
        parentField: "#password"
    })
