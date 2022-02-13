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
		if(!isNaN(edad) && edad < 18)
		{
			alert("Es menor de edad");
		
		}
	}	
	
}//FIN DE LA FUNCIÓN