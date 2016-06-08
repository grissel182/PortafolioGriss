// para menu hamburguesa

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    $('#nav').slideToggle("slow");
    $('.btn-1').slideToggle(600);
  });

/* Open when someone clicks on the span element */
function openUser() {
    document.getElementById("User").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeUser() {
    document.getElementById("User").style.width = "0%";
}
function openInopsye() {
    document.getElementById("Inopsye").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeInopsye() {
    document.getElementById("Inopsye").style.width = "0%";
}
function openGema() {
    document.getElementById("Gema").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeGema() {
    document.getElementById("Gema").style.width = "0%";
}
function openFlat() {
    document.getElementById("Flat").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeFlat() {
    document.getElementById("Flat").style.width = "0%";
}
function openFashion() {
    document.getElementById("Fashion").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeFashion() {
    document.getElementById("Fashion").style.width = "0%";
}
function openKane() {
    document.getElementById("Kane").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeKane() {
    document.getElementById("Kane").style.width = "0%";
}
function openFoto() {
    document.getElementById("Foto").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeFoto() {
    document.getElementById("Foto").style.width = "0%";
}
function openBrand() {
    document.getElementById("Brand").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeBrand() {
    document.getElementById("Brand").style.width = "0%";
}
function openCorto() {
    document.getElementById("Corto").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeCorto() {
    document.getElementById("Corto").style.width = "0%";
}
// CODIGO DE FUNCION DE TEXTO SOBRE VIDEO 

var originales = ['comunicadora visual',
'verdadera cinéfila',
'fanática de los idiomas',
'front – end developer',
'soñadora compulsiva',
'melancólica fotógrafa',
'entusiasta nadadora',
'apasionada al baile',
'creativa por naturaleza',
'curiosa entrañable',
'escritora de cartas',
'viajera de corazón',
'documentalista de rarezas'
];
var frases = ['front – end developer','creativa por naturaleza',
'curiosa entrañable',
'escritora de cartas',
'viajera de corazón',
'documentalista de rarezas',
'soñadora compulsiva',
'melancólica fotógrafa',
'entusiasta nadadora',
'apasionada al baile',
'comunicadora visual',
'verdadera cinéfila',
'fanática de los idiomas'];

var generarAleatorio = function() {
  var num = Math.random() * (frases.length);
  return Math.floor(num);
} 



var desplegarTexto = function() {

  var ponerLetra = function() {
    
    if (i < frase.length) {
      console.log(frase[i]);
      // ID TEXTO EN HTML PARA COLOCAR
      $('#texto').append(frase[i]);
      i++;
      setTimeout(ponerLetra, 140);
    } else {
      $('#texto').text('');
      desplegarTexto();
    } 

  }
  
  var index = generarAleatorio();
  var frase = frases[index];
  var i = 0;

  console.log('Tamano: ' + frases.length);

  if (frases.length > 0) {
    frases.splice(index, 2);  
    setTimeout(ponerLetra, 310);
  } else {
    console.log('.......');
    //Copiar el arreglo original en el arreglo frases
    frases = originales.slice();
    desplegarTexto();
  }

}

$(document).ready(function() {
  console.log(':D');
  desplegarTexto();
  $('.btn-1').slideToggle(300) //ocultar botones de menu al inicio
});




