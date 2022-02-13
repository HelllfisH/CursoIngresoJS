function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(!isNaN(edad) && edad > 17)
	{
		alert("Es mayor de edad");
	}

}//FIN DE LA FUNCIÓN