from django.db import models
from enumfields import EnumField
from enum import Enum


class Dificuldade(Enum):
    MUITO_FACIL = 'MF'
    FACIL = 'fácil'
    MEDIO = 'médio'
    DIFICIL = 'difícil'
    MUITO_DIFICIL = 'muito difícil'

    class Labels:
        MUITO_FACIL = 'muito fácil'
# https://github.com/hzdg/django-enumfields#enum
# https://github.com/encode/django-rest-framework/issues/1755


class Categorias(Enum):
    GERAL = 'Geral'
    SOBREMESA = 'Sobremesas'
    SALGADO = 'Salgados'
    BOLO = 'Bolos'
    ACOMPANHAMENTOS = 'Acompanhamentos'


class Receita(models.Model):

    nome = models.CharField(max_length=50, default="")
    modo_de_preparo = models.TextField()
    dificuldade = EnumField(
        enum=Dificuldade,
        default=Dificuldade.MEDIO
    )
    categoria = EnumField(
        enum=Categorias,
        default=Categorias.GERAL
    )

    def __str__(self):
        return self.nome
