function mostrar()
{
	//tomo la hora
	
	var hora;
	hora= txtIdHora.value;
	hora= parseInt(hora);

	if(hora > 6 && hora < 12)
	{
		switch(hora)
		{
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				alert("Es de mañana");
				break;
			default:
				break;					
		}
	}

}//FIN DE LA FUNCIÓN