#include<stdio.h>
#include<string.h>

int main(){
	
	int i;
	char palavra[50], palindro[50];
	
	printf("Digite uma palavra: ");
	scanf("%s", &palavra);
	
	for ( i = 0 ; i <= strlen(palavra) ; i++ ){
		palindro[i] = palavra[strlen(palavra) - 1 - i];
	}
	
	if ( strcmp (palavra, palindro) == 0 ){
		printf("\nEh um palindro!");
	} else{
		printf("\nNao eh um palindro...");
	}
	
}
