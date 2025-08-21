#include <stdio.h>

int main(){
	
	int nota1, nota2, nota3, peso1, peso2, peso3, medpon;
	
	printf("Vamos analisar suas notas e tirar sua media ponderada!\n(utilizaremos apenas numeros inteiros)\n");
	
	printf("\nNota que tirou na primeira prova: ");
	scanf("%d", &nota1);
	printf("Qual era o peso dela? ");
	scanf("%d", &peso1);
	
	printf("\nNota que tirou na segunda prova: ");
	scanf("%d", &nota2);
	printf("Qual era o peso dela? ");
	scanf("%d", &peso2);
	
	printf("\nNota que tirou na terceira prova: ");
	scanf("%d", &nota3);
	printf("Qual era o peso dela? ");
	scanf("%d", &peso3);
	
	medpon = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);
	
	printf("\nSua media ponderada e %d!", medpon);
	
}
