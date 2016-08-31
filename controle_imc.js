function calcular_imc(peso,altura)
{
	var imc = peso / (altura * altura);
	return imc;
}

function mostrar_imc(form)
{
	var imc = calcular_imc 
		(parseFloat(form.peso.value), 
		parseFloat(form.altura.value));

	if (imc < 17) 
		alert("Muito abaixo do peso!")
	if (imc >= 17 && imc <= 18.49) 
		alert("Abaixo do peso!")
	if (imc >= 18.5 && imc <= 24.99) 
		alert("Peso normal!")
	if (imc >= 25 && imc <= 29.99) 
		alert("Acima do peso!")
	if (imc >= 30 && imc <= 34.99) 
		alert("Obeso!")
	if (imc >= 35 && imc <= 39.99) 
		alert("Obesidade severa!")
	if (imc >= 40) 
		alert("Obesidade mórbida!")
}