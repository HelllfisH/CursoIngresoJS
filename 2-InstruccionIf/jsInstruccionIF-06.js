function mostrar()
{
	//tomo la edad  
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(edad >= 18)
	{
		alert("Es mayor de edad");
	
	}else
	{
		if(edad <= 17 && edad >= 13)
		{
			alert("Es adolecente");

		}else
		{
			alert("Es menor de edad");	
		}
	
	}
	/*if(edad >= 18)
	{
		alert("Es mayor de edad");
	}else
	{
		if(edad >= 13 && edad <= 17)
		{
			alert("Es adolecente");
		}else
		{
			if(edad < 13)
			{
				alert("Es menor");
			}
		}
		
	}*/
}//FIN DE LA FUNCIÓN