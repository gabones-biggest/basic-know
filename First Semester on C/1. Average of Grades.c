#include <stdio.h>

int main(){
	
	int nota1, nota2, nota3, nota4, media;
	
	printf("Este programa cria a media do seu semestre, de acordo com suas notas em cada prova.\n(utilizaremos apenas numeros inteiros)\n");
	
	printf("\nProva 1: ");
	scanf("%d", &nota1);
	
	printf("Prova 2: ");
	scanf("%d", &nota2);
	
	printf("Prova 3: ");
	scanf("%d", &nota3);
	
	printf("Prova 4: ");
	scanf("%d", &nota4);
	
	media = (nota1 + nota2 + nota3 + nota4) / 4;
	
	printf("\nA media do seu semestre e: %d.", media);
	
}
