#include <stdio.h>

int main(){
	
	double porig, pdesc, pfinal;
	
	printf("Voce vai fazer uma compra agora, e tem um cupom de desconto disponivel.\n(favor, usar numero real)\n");
	
	printf("\nQual e o preco do produto que pretende levar? ");
	scanf("%lf", &porig);
	
	printf("Legal, mas qual e o percentual do teu cupom? ");
	scanf("%lf", &pdesc);
	
	pfinal = porig * pdesc / (double)100;
	pfinal = porig - pfinal;
	
	printf("\nO preco final do teu produto sera de %.2f reais.", pfinal);
	
}
