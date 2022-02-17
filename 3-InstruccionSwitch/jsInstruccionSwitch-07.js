function mostrar()
{
	
	var destino;
	destino= txtIdDestino.value;

	switch(destino)
	{
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Bariloche":
			alert("Oeste");
			break;		 	
	}

}//FIN DE LA FUNCIÓN