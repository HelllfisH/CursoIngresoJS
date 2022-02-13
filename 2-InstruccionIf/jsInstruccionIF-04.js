function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(edad > 12 && edad < 18)
	{
		alert("Es adolecente");
	}/*else
	{
		alert("No es adolecente");
	}*/
}//FIN DE LA FUNCIÓN