function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(edad > 17)
	{
		alert("es mayor de edad");

	}else
	{
		if(edad > 12 && edad < 18)
		{
			alert("adolecente");

		}else
		{
			if(edad < 13)
			{
				alert("niño");
			}
			
		}
	}	
	
}//FIN DE LA FUNCIÓN