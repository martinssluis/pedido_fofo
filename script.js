
    function sim() {
        alert("Você aceitou namorar comigo! :) ")

    }

    function desvia(t) {
        var btn = t
        btn.style.position = 'absolute'
        btn.style.top = geraPosicao(10, 90)
        btn.style.right = geraPosicao(10, 90)
        console.log("opa, desviei...");
    }

    randomNumber(0, 100)

    function geraPosicao(min, max) {
        return (Math.random() * (max - min) + min) + '%';
    }



