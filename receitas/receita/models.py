from django.db import models
from enumfields import EnumField
from enum import Enum


class Dificuldade(str, Enum):
    MUITO_FACIL = 'muito fácil'
    FACIL = 'fácil'
    MEDIO = 'médio'
    DIFICIL = 'difícil'
    MUITO_DIFICIL = 'muito difícil'


class Categorias(str, Enum):
    GERAL = 'Geral'
    SOBREMESA = 'Sobremesas'
    SALGADO = 'Salgados'
    BOLO = 'Bolos'
    ACOMPANHAMENTOS = 'Acompanhamentos'


class Receita(models.Model):

    nome = models.CharField(max_length=50, default="")
    modo_de_preparo = models.TextField()
    dificuldade = EnumField(
        max_length=55,
        enum=Dificuldade,
        default=Dificuldade.MEDIO
    )
    categoria = EnumField(
        max_length=55,
        enum=Categorias,
        default=Categorias.GERAL
    )

    def __str__(self):
        return self.nome

    def ToJson(self) -> str:
        return json.dumps(self.__dict__, cls=EnumEncoder, indent=1, sort_keys=True)
