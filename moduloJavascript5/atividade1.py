""" Crie um tipo abstrato de dado (TAD) para manipular números complexos na linguagem Python. O método deve:

- calcular três números complexos;

-realizar todas as operações básicas;

e imprimir as propriedades real e img do números. """

class NumeroComplexo:
    """
    TAD para números complexos.

    Args:
        real: Parte real do número complexo.
        img: Parte imaginária do número complexo.
    """

    def __init__(self, real, img):
        self.real = real
        self.img = img

    def __add__(self, outro):
        return NumeroComplexo(self.real + outro.real, self.img + outro.img)

    def __sub__(self, outro):
        return NumeroComplexo(self.real - outro.real, self.img - outro.img)

    def __mul__(self, outro):
        return NumeroComplexo(self.real * outro.real - self.img * outro.img,
                               self.real * outro.img + self.img * outro.real)

    def __truediv__(self, outro):
        divisor = outro.real ** 2 + outro.img ** 2
        return NumeroComplexo((self.real * outro.real + self.img * outro.img) / divisor,
                               (self.img * outro.real - self.real * outro.img) / divisor)

    def __str__(self):
        return f"({self.real} + {self.img}i)"

    def __repr__(self):
        return f"NumeroComplexo({self.real}, {self.img})"


def calcular_numeros_complexos():
    """
    Calcula três números complexos.

    Returns:
        Uma tupla com três números complexos.
    """
    numero_1 = NumeroComplexo(1, 2)
    numero_2 = NumeroComplexo(3, 4)
    numero_3 = NumeroComplexo(5, 6)
    return numero_1, numero_2, numero_3


def realizar_operacoes_basicas(numero_1, numero_2, numero_3):
    """
    Realiza todas as operações básicas com três números complexos.

    Args:
        numero_1: Primeiro número complexo.
        numero_2: Segundo número complexo.
        numero_3: Terceiro número complexo.
    """
    print("Soma:", numero_1 + numero_2 + numero_3)
    print("Subtração:", numero_1 - numero_2 - numero_3)
    print("Multiplicação:", numero_1 * numero_2 * numero_3)
    print("Divisão:", numero_1 / numero_2 / numero_3)


def imprimir_propriedades_real_img(numero_1, numero_2, numero_3):
    """
    Imprime as propriedades real e img de três números complexos.

    Args:
        numero_1: Primeiro número complexo.
        numero_2: Segundo número complexo.
        numero_3: Terceiro número complexo.
    """
    print("Número 1:", numero_1.real, numero_1.img)
    print("Número 2:", numero_2.real, numero_2.img)
    print("Número 3:", numero_3.real, numero_3.img)


if __name__ == "__main__":
    numero_1, numero_2, numero_3 = calcular_numeros_complexos()
    realizar_operacoes_basicas(numero_1, numero_2, numero_3)
    imprimir_propriedades_real_img(numero_1, numero_2, numero_3)
