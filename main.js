$(document).ready(function () {

    var ripamonti
    var mercadante
    var ayonride
    var fastFacts1
    var fastFacts2
    var manufacturer1
    var manufacturer2

    // $("#morphineEq").keyup(function (event) {
    //     if (event.keyCode === 13) {
    //         $("#submit").on();
    //     }
    // });



    $("#submit").on("click", function () {
        event.preventDefault();
        var MSO4 = parseFloat($("#morphineEq").val());



        console.log(typeof (MSO4));

        if (MSO4 >= 30 && MSO4 <= 90) {
            ripamonti = (MSO4 / 4).toFixed(2)
            mercadante = (MSO4 / 4).toFixed(2)

            console.log("Ripamonti =" + ripamonti)
            console.log("Mercadante =" + mercadante)

            $("#ripamontiNum").text(ripamonti + "mg");
            $("#mercadanteNum").text(mercadante + "mg")



        } else if (MSO4 >= 90 && MSO4 <= 300) {
            ripamonti = (MSO4 / 6).toFixed(2)
            mercadante = (MSO4 / 8).toFixed(2)

            console.log("Ripamonti =" + ripamonti)
            console.log("Mercadante =" + mercadante)

            $("#ripamontiNum").text(ripamonti + "mg");
            $("#mercadanteNum").text(mercadante + "mg")

        } else if (MSO4 > 300) {
            ripamonti = (MSO4 / 8).toFixed(2)
            mercadante = (MSO4 / 12).toFixed(2)

            console.log("Ripamonti =" + ripamonti)
            console.log("Mercadante =" + mercadante)

            $("#ripamontiNum").text(ripamonti + "mg");
            $("#mercadanteNum").text(mercadante + "mg")

        } else {
            alert("Patient should be on at least 30mg of Morphine per day")
        }

        if (MSO4 <= 100) {

            ayonride = (MSO4 / 3).toFixed(2);

            fastFacts1 = (ayonride * .75).toFixed(2)
            fastFacts2 = (ayonride * 0.5).toFixed(2)

            console.log("Ayonride =" + ayonride);
            console.log("Fast facts =" + fastFacts1)
            console.log("This is a number" + fastFacts2);

            $("#ayonrideNum").text(ayonride + "mg")
            $("#FFNum").text(fastFacts2 + "-" + fastFacts1 + "mg")

        } else if (MSO4 >= 101 && MSO4 <= 300) {
            ayonride = (MSO4 / 5).toFixed(2)
            fastFacts1 = (ayonride * .75).toFixed(2)
            fastFacts2 = (ayonride * 0.5).toFixed(2)

            console.log("Ayonride =" + ayonride);
            console.log("Fast facts =" + fastFacts1)
            console.log("This is a number" + fastFacts2);

            $("#ayonrideNum").text(ayonride + "mg")
            $("#FFNum").text(fastFacts2 + "-" + fastFacts1 + "mg")

        } else if (MSO4 >= 301 && MSO4 <= 600) {
            ayonride = (MSO4 / 10).toFixed(2)
            fastFacts1 = (ayonride * .75).toFixed(2)
            fastFacts2 = (ayonride * 0.5).toFixed(2)

            console.log("Ayonride =" + ayonride);
            console.log("Fast facts =" + fastFacts1)
            console.log("This is a number" + fastFacts2);

            $("#ayonrideNum").text(ayonride + "mg")
            $("#FFNum").text(fastFacts2 + "-" + fastFacts1 + "mg")
        } else if (MSO4 >= 601 && MSO4 <= 800) {
            ayonride = (MSO4 / 12).toFixed(2)
            fastFacts1 = (ayonride * .75).toFixed(2)
            fastFacts2 = (ayonride * 0.5).toFixed(2)

            console.log("Ayonride =" + ayonride);
            console.log("Fast facts =" + fastFacts1)
            console.log("This is a number" + fastFacts2);

            $("#ayonrideNum").text(ayonride + "mg")
            $("#FFNum").text(fastFacts2 + "-" + fastFacts1 + "mg")
        } else if (MSO4 >= 801 && MSO4 <= 1000) {
            ayonride = (MSO4 / 15).toFixed(2)
            fastFacts1 = (ayonride * .75).toFixed(2)
            fastFacts2 = (ayonride * 0.5).toFixed(2)

            console.log("Ayonride =" + ayonride);
            console.log("Fast facts =" + fastFacts1)
            console.log("This is a number" + fastFacts2);

            $("#ayonrideNum").text(ayonride + "mg")
            $("#FFNum").text(fastFacts2 + "-" + fastFacts1 + "mg")
        } else if (MSO4 > 1001) {
            ayonride = (MSO4 / 20).toFixed(2)
            fastFacts1 = (ayonride * .75).toFixed(2)
            fastFacts2 = (ayonride * 0.5).toFixed(2)

            console.log("Ayonride =" + ayonride);
            console.log("Fast facts =" + fastFacts1)
            console.log("This is a number" + fastFacts2);

            $("#ayonrideNum").text(ayonride + "mg")
            $("#FFNum").text(fastFacts2 + "-" + fastFacts1 + "mg")
        }

        if (MSO4 < 100) {
            manufacturer1 = (MSO4 * 0.2).toFixed(2)
            manufacturer2 = (MSO4 * 0.3).toFixed(2)

            console.log(manufacturer1, manufacturer2)

            $("#manufNum").text(manufacturer1 + "-" + manufacturer2 + "mg")
        } else if (MSO4 >= 100 && MSO4 <= 300) {
            manufacturer1 = (MSO4 * 0.1).toFixed(2)
            manufacturer2 = (MSO4 * 0.2).toFixed(2)

            console.log(manufacturer1, manufacturer2)

            $("#manufNum").text(manufacturer1 + "-" + manufacturer2 + "mg")
        } else if (MSO4 >= 301 && MSO4 <= 600) {
            manufacturer1 = (MSO4 * 0.08).toFixed(2)
            manufacturer2 = (MSO4 * 0.12).toFixed(2)

            console.log(manufacturer1, manufacturer2)

            $("#manufNum").text(manufacturer1 + "-" + manufacturer2 + "mg")
        } else if (MSO4 >= 601 && MSO4 <= 1000) {
            manufacturer1 = (MSO4 * 0.05).toFixed(2)
            manufacturer2 = (MSO4 * 0.1).toFixed(2)

            console.log(manufacturer1, manufacturer2)

            $("#manufNum").text(manufacturer1 + "-" + manufacturer2 + "mg")
        } else if (MSO4 > 1001) {
            alert("Manufacturer recommends consulting another healthcare professional at doses above 1,000mg/day")
        }

    })





})

