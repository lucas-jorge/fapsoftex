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

def situacao_aluno(nota_1, nota_2, faltas):
    media = (nota_1 + nota_2) / 2
    situacao = "APROVADO" if media >= 7 and faltas <= 5 else "REPROVADO"
    return media, situacao

arquivo_csv = "notas_alunos.csv"
df = pd.read_csv(arquivo_csv)

df["media"], df["situacao"] = zip(*df.apply(lambda row: situacao_aluno(row["nota_1"], row["nota_2"], row["faltas"]), axis=1))


arquivo_saida = "alunos_situacao.csv"
df.to_csv(arquivo_saida, index=False)

maior_numero_faltas = df["faltas"].max()
media_geral_notas = df["media"].mean()
maior_media = df["media"].max()

print(f"Maior número de faltas: {maior_numero_faltas}")
print(f"Média geral das notas dos alunos: {media_geral_notas:.2f}")
print(f"Maior média: {maior_media:.2f}")