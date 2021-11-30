    $("#text").validator({
        type: "text"
    });

    $("#text2").validator({
        type: "text",
        min: "min",
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
        min: 6,
        max: 12,
        caps: true ,
        symbols: true,
        numbers: true
    })

    $("#password_match").validator({
        type: "match",
        parentField: "#password"
    })
