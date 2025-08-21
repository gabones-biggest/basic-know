#include<stdio.h>
	// Sistema de Cadastro de Clientes
	// Cadastrar informações de várias pessoas, listá-las, pesquisar pelo nome
	// Utilizar apenas arrays (vetores ou matrizes) para armazenar os dados
	// Deve ser armazenado: nome (string ~50 caracteres), idade (inteiro), altura (float)

int main(){
	int input, idade[10], numClientes = 0, i = 0, t = -1;
	float altura[10];
	char nome[10][50], temp[50];
	
	do{
		printf("Cadastro de Clientes\n\n");
		printf("1 - Cadastrar Cliente\n");
		printf("2 - Listar todos os Clientes\n");
		printf("3 - Buscar um Cliente\n");
		printf("4 - Sair\n\n");
		printf("Digite sua opcao: ");
		scanf("%d", &input);
		if(input == 1){
			// Cadastrar uma nova pessoa
			if(numClientes >= 10){
				printf("\nNao e possivel cadastrar mais clientes.\n\n");
			}else{
			// Solicitar Nome (vetor paralelo, limite de cadastro -> 10)
			printf("\nQual e o nome do(a) cliente? ");
			scanf("%s", &nome[numClientes]);
			// Solicitar Idade (vetor paralelo, limite de cadastro -> 10)
			printf("Qual e o idade do(a) cliente? ");
			scanf("%d", &idade[numClientes]);
			// Solicitar Altura (vetor paralelo, limite de cadastro -> 10)
			printf("Qual e a altura do(a) cliente? ");
			scanf("%f", &altura[numClientes]);
			printf("\n");
			numClientes++;
			}
		}else if(input == 2){
			// Listar de forma organizada todas as informações das pessoas cadastradas até o momento
			printf("\n");
			while(i < numClientes){
				printf("Num. do Cliente: %d\nNome: %s\n", i+1, nome[i]);
				printf("Idade: %d \n", idade[i]);
				printf("Altura: %.2f\n\n", altura[i]);
				i++;
			}
			if(numClientes == 0){
				printf("Nenhum cliente cadastrado(a).\n\n");
			}
			i = 0;
		}else if(input == 3){
			// Buscar pessoa pelo nome
			// Solicitar Nome (scanf/fgets)
			// Procurar o nome obtido no vetor de nomes
			// Se encontrar, exibir as informações da pessoa, do contrário, informa que não foi encontrada
			printf("\nQual e o nome do(a) cliente que busca? ");
			scanf("%s", &temp);
			printf("\n");
			while(i < numClientes){
				if(strcmp(nome[i],temp) == 0){
					t = i;
					i = 11;
				}else{
					t = -1;
					i++;
				}
			}
			i = 0;
			if(t != -1){
					printf("Num. do Cliente: %d\nNome: %s\n", t+1, nome[i]);
					printf("Idade: %d\n", idade[t]);
					printf("Altura: %.2f\n\n", altura[t]);
				}else{
					printf("Cliente nao cadastrado(a).\n\n");
				}
		}
	}while(input != 4);// Sair do programa
}
