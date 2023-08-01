//Crie um vetor com ponteiros utilizando alocação dinâmica na linguagem C, que:

//- use a função realloc;
//- use a função sizeof;
//- que tenha tamanho 22 de vetor;
//- depois libere o bloco utilizando a função freeCrie um vetor com ponteiros utilizando alocação dinâmica na linguagem C, que:

//- use a função realloc;
//- use a função sizeof;
//- que tenha tamanho 22 de vetor;
//- depois libere o bloco utilizando a função free

#include <stdio.h>

    int main()
{
    int *ponteiro = NULL;
    int tamanho = 22;
    ponteiro = (int *)malloc(tamanho * sizeof(int));
    if (ponteiro == NULL)
    {
        printf("Erro: Memoria Insuficiente");
        exit(1);
    }
    else
    {
        printf("Memoria alocada com sucesso\n");
    }
    ponteiro = (int *)realloc(ponteiro, 22 * sizeof(int));
    if (ponteiro == NULL)
    {
        printf("Erro: Memoria Insuficiente");
        exit(1);
    }
    else
    {
        printf("Memoria realocada com sucesso\n");
    }
    free(ponteiro);
    return 0;
}   