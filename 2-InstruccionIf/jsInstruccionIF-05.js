function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(edad < 13 || edad > 17)
	{
		alert("No es adolecente");
	}/*else
	{
		alert(" ");
	}*/
	
	
	/*if(!(edad >= 13 && edad <= 17))
	{
		alert("NO es adolecente");
	}else
   {
	   alert("Adolecente");
   }*/


}//FIN DE LA FUNCIÓN