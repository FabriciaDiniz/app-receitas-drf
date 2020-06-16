from django.db import models
from enumfields import EnumField
from enum import Enum

from receitas.receita.models import Receita


class Unidade(str, Enum):
    UNIDADE = 'unidade'
    XICARA = 'xícara'
    TSP = 'colher de chá'
    TBSP = 'colher de sopa'
    GRAMAS = 'gramas'
    ML = 'mL'
    PITADA = 'pitada'
    A_GOSTO = 'a gosto'
    CAIXA = 'caixa'
    LATA = 'lata'


class Ingrediente(models.Model):

    receita = models.ForeignKey(Receita, on_delete=models.CASCADE)
    nome = models.CharField(max_length=30)
    unidade = EnumField(
        max_length=55,
        enum=Unidade,
        default=Unidade.UNIDADE
    )
    quantidade = models.CharField(max_length=5, blank=True, null=True)
    substituto = models.BooleanField(default=False)

    def __str__(self):
        return self.nome
