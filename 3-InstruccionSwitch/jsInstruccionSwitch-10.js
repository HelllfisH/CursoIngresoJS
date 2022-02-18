function mostrar()
{
	var estaciones;
	var destino;
	estaciones= txtIdEstacion.value;
	destino= txtIdDestino.value;

	switch(estaciones)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					alert("Se viaja");
					break;
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;
				case "Bariloche":
				case "Cordoba":
					alert("No se viaja");
					break;
			}	
			break;
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;		
			}	
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					alert("No se viaja");
					break;
				case "Cordoba":
				case "Cataratas":
				case "Mar del plata":
					alert("Se viaja");
					break;			
			}	
			break;
		default:
			break;	
	}		



}//FIN DE LA FUNCIÓN