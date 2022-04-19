document.querySelectorAll('.boton__acordeon').forEach(button =>{
    button.addEventListener('click', () =>{
        // Se puede descomentar esto para añadir una animacion, pero esto no lo deja ajustar su tamaño en tiempo real.
        //const contenidoacordeon= button.nextElementSibling;

        button.classList.toggle('boton__acordeon--activo');
        
        //if (button.classList.contains('boton__acordeon--activo')){
        //   contenidoacordeon.style.maxHeight = contenidoacordeon.scrollHeight + 'px';
        //} else{
        //    contenidoacordeon.style.maxHeight = 0;
        //}

    });

});
