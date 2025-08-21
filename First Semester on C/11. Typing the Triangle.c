#include <math.h>
#include <stdio.h>

int main()
{
	
	double lado1, lado2, lado3;
	
	printf("Vamos levar em consideração os tres lados (em centimetros) de um triangulo, e definir seu tipo.\n");
	
	printf("\nQual e o tamanho de um dos lados? ");
	scanf("%lf", &lado1);
	
	printf("E de um outro? ");
	scanf("%lf", &lado2);
	
	printf("Do ultimo? ");
	scanf("%lf", &lado3);
	
	if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3)
	{
		printf("\nE um triangulo equilatero!");
	}else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
	{
		printf("\nE um triangulo isosceles!");
	}else
	{
		printf("\nE um triangulo escaleno!");
	}
	
}
