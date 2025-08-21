#include<stdio.h>
#include<string.h>
#include<ctype.h>

int main(){
	
	int i;
	char frase[50];
	
	printf("Digite uma frase: ");
	fgets(frase, sizeof frase, stdin);
	
	printf("\nComo ela fica so com letras maiusculas: ");
	
	for ( i = 0 ; i <= strlen(frase) ; i++ ){
		frase[i] = toupper(frase[i]);
		printf("%c", frase[i]);
	}
	
	printf("\nComo ela fica so com letras minusculas: ");
	
	for ( i = 0 ; i <= strlen(frase) ; i++ ){
		frase[i] = tolower(frase[i]);
		printf("%c", frase[i]);
	}
	
}
