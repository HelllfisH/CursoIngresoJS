function mostrar()
{
	//tomo la edad  
	
	var edad;
	var estado_civil;
	edad= txtIdEdad.value;
	estado_civil= estadoCivil.value;
	edad= parseInt(edad);

	if(edad < 18 && estado_civil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");

	}	
	

}//FIN DE LA FUNCIÓN