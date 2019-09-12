function validarApellido() { 
  var apellido = document.getElementById("apellido").value;

  var exApellido = /[a-zA-Z]{3,20}$/;

  if(exApellido.test(apellido)) {
		$.alertable.alert('Correcto!').always(function() {
        console.log('Alert dismissed');
      });
	} else {
    $.alertable.alert('Incorrecto!').always(function() {
        console.log('Alert dismissed');
    }); 
  }
}

function validarNombre() { 
  var nombre = document.getElementById("nombre").value;

  var exNombre = /[a-zA-Z]{3,20}$/;

  if(exNombre.test(nombre)) {
    $.alertable.alert('Correcto!').always(function() {
        console.log('Alert dismissed');
      });
  } else {
    $.alertable.alert('Incorrecto!').always(function() {
        console.log('Alert dismissed');
    }); 
  }
}

function validarCelular() { 
  var celular = document.getElementById("celular").value;

  var exTelefono = /[9]([0-9]{8})$/;

  if(exTelefono.test(celular)) {
    $.alertable.alert('Correcto!').always(function() {
        console.log('Alert dismissed');
      });
  } else {
    $.alertable.alert('Incorrecto!').always(function() {
        console.log('Alert dismissed');
    }); 
  }
}

function validarCorreo() {
  var correo = document.getElementById("correo").value;

  var exCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

  if(exCorreo.test(correo)) {
    $.alertable.alert('Correcto!').always(function() {
        console.log('Alert dismissed');
      });
  } else {
    $.alertable.alert('Incorrecto!').always(function() {
        console.log('Alert dismissed');
    }); 
  }
}