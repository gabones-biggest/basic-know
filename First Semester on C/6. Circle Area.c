#include <stdio.h>

int main(){
	
	double raio, area;
	
	printf("Daremos a area de um circulo (em cm2) de acordo com o valor do raio (em cm) escolhido por voce.\n(favor, escolher um numero real)\n");
	
	printf("\nEntao, qual o valor que escolhera? ");
	scanf("%lf", &raio);
	
	area = 3.14 * (raio * raio);
	
	printf("\nA area do circulo e de %.2f cm2.", area);
	
}
