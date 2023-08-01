#Desenvolva um programa que deve ler um arquivo csv intitulado “notas_alunos.csv”. O arquivo deve ter a seguinte estrutura:

#aluno: Nome do aluno;
#nota_1: Primeira nota;
#nota_2: Segunda nota;
#faltas: Númerofaltas;

#O programa lerá esse arquivo e criará duas colunas. A primeira coluna será “media”, que terá a média das duas notas do aluno. A segunda será “situacao”, com os valores: APROVADO ou REPROVADO.

#O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado. O programa deverá salvar esse novo dataframe com o nome “alunos_situacao.csv”.

#Por fim, o programa deverá mostrar na tela:
#- o maior número de faltas;
#- a média geral das notas dos alunos;
#- e a maior média.

#Dados da planilha para conferencia:
#aluno,nota_1,nota_2,faltas
#aluno_1,7,7,1
#aluno_2,3,10,7
#aluno_3,9,4,2
#aluno_4,10,6,9

import pandas as pd
df = pd.read_csv("notas_alunos.csv")
df["media"] = (df["nota_1"] + df["nota_2"])/2
df["situacao"] = df.apply(lambda row: "REPROVADO" if row["faltas"] > 5 or row["media"] < 7 else "APROVADO", axis=1)
df.to_csv("alunos_situacao.csv", index=False)
print("Maior número de faltas: ", df["faltas"].max())
print("Média geral das notas dos alunos: ", df["media"].mean())
print("Maior média: ", df["media"].max())
