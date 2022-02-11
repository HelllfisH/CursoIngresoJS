function mostrar()
{
	//tomo la edad  
	var edad;
	edad= txtIdEdad.value;
	edad= parseInt(edad);

	if(edad <= 12 || edad >= 18)
	{
		alert("NO es adolecente");

	}
	/*else
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