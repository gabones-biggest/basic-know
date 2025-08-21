#include <stdio.h>

int main(){
	
	int altura, base, area, perim;
	
	printf("Vamos calcular, em cm, a area e o perimetro de um retangulo, de acordo com a altura e a base que voce escolher!\n(utilizaremos apenas numeros inteiros)\n");
	
	printf("\nQual vai ser a altura do seu retangulo? ");
	scanf("%d", &altura);
	
	printf("E qual vai ser o tamanho da base? ");
	scanf("%d", &base);
	
	area = base * altura;
	perim = 2 * (base + altura);
	
	printf("\nA area do retangulo e de %d cm2, e o perimetro e de %d cm.", area, perim);
	
}
