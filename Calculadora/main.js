const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id == "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id == "borrar") {

            if (pantalla.textContent.length == 1 || pantalla.textContent == "Error") {
                pantalla.textContent = "0";
                return;
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                return;
            }
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);

                if (pantalla.textContent == "Infinity") {
                    pantalla.textContent = "No se puede dividir entre cero"
                }
                
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

    })

    /*esto resetearia la pantalla dependiendo de si se quiere seguir haciendo la cuenta o hacer una nueva sin tocar C
    
    if (boton.id == "divi" || boton.id == "multipl" || boton.id == "suma" || boton.id == "resta") {
        console.log("deberia resetearse la pantalla")
    } else {
        console.log("no pasa nada")
    }*/

})