function mostrar()
{
	//tomo el mes
	 
	var mes;
	mes= txtIdMes.value;

	switch(mes)
	{
		case "Enero":
		case "Febrero":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		default:
			break;												
	}

	

}//FIN DE LA FUNCIÓN