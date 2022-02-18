function mostrar()
{
	var destino;
	var estadia;
	var estaciones;
	var aumento;
	var descuento;
	estaciones= txtIdEstacion.value;
	destino= txtIdDestino.value;
	estadia= 15000;

	switch(estaciones)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento= estadia * 0.20;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Cataratas":
					descuento= estadia * 0.10;
					destino= estadia - descuento;
					alert("El valor es de " + destino);
					break;
				case "Cordoba":
					descuento= estadia * 0.10;
					destino= estadia - descuento;
					alert("El valor es de " + destino);
					break;
				case "Mar del plata":
					descuento= estadia * 0.20;
					destino= estadia - descuento;
					alert("El valor es de " + destino);
					break;			
			}
			break;				
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento= estadia * 0.20;
					destino= estadia - descuento;
					alert("El valor es de " + destino);
					break;
				case "Cataratas":
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Cordoba": 
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Mar del plata":
					aumento= estadia * 0.20;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;			
			}
			break;
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Cataratas":
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Mar del plata":
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Cordoba":
					alert("El valor es de " + estadia);
					break;			
			}
			break;

		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Cataratas":
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Mar del plata":
					aumento= estadia * 0.10;
					destino= estadia + aumento;
					alert("El valor es de " + destino);
					break;
				case "Cordoba":
					alert("El valor es de " + estadia);
					break;
			}
			break;
		default:
			break;				

	}

}//FIN DE LA FUNCIÓN