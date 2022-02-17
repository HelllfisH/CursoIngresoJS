function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);
	
	if(edad > 17)
	{
		alert("Es mayor de edad");

	}else
	{
		if(edad < 18 && edad > 12)
		{
			alert("Es adolecente");

		}else 
		{
			if(!isNaN(edad) && edad < 13)
			{
				alert("Es niño");

			}
		}
	}
	
}//FIN DE LA FUNCIÓN