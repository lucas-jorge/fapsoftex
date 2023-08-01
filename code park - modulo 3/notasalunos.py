import pandas as pd

notas_alunos = {
  "alunos": ['aluno_1', 'aluno_2', 'aluno_3', 'aluno_4'],
  "notas_1": [7, 3, 9, 10],
  "notas_2": [7, 10, 4, 6],
  "faltas": [1, 7, 2, 9]
}
#load data into a DataFrame object:
df = pd.DataFrame(notas_alunos)
df["media"] = (df["nota_1"] + df["nota_2"])/2
df["situacao"] = df.apply(lambda row: "REPROVADO" if row["faltas"] > 5 or row["media"] < 7 else "APROVADO", axis=1)
df.to_csv("alunos_situacao.csv", index=False)
print("Maior número de faltas: ", df["faltas"].max())
print("Média geral das notas dos alunos: ", df["media"].mean())
print("Maior média: ", df["media"].max())