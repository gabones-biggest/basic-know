#include <stdio.h>

int main(){
	
	int peso;
	double altura, imc;
	
	printf("Vamos calcular o teu IMC! Pra isso precisaremos do seu peso (em numero inteiro) e da sua altura (em numero real)!\n");
	
	printf("\nQuantos kg voce tem? ");
	scanf("%d", &peso);
	
	printf("Agora, qual e a sua altura, em metros? ");
	scanf("%lf", &altura);
	
	imc = (double)peso / (altura * altura);
	
	printf("\nO teu IMC e: %.1f!", imc);
	
}
