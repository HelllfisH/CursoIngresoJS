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
		if(edad > 12 && edad < 18)
		{
			alert("Es adolecente");

		}else
		{
			if(!isNaN(edad) && edad < 13)
			{
				alert("Es menor de edad");
			}
		}
	}
	
}//FIN DE LA FUNCIÓN