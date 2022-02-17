function mostrar()
{
	
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(edad < 13 || edad > 17)
	{
		alert("NO es adolecente");
		
	}
	
	/*el signo ! hace lo contrario a lo que se escribe
	
	if(!(edad > 12 && edad < 18))
	{
		alert("NO es adolecente");
	}else
   {
	   alert("Adolecente");
   }*/


}//FIN DE LA FUNCIÓN