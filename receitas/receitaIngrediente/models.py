from django.db import models
from enumfields import EnumField
from enum import Enum

from receitas.receita.models import Receita
from receitas.ingrediente.models import Ingrediente


class Unidade(Enum):
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


class ReceitaIngrediente(models.Model):

    receita = models.ForeignKey(Receita, on_delete=models.CASCADE)
    ingrediente = models.ForeignKey(Ingrediente, on_delete=models.CASCADE)
    unidade = EnumField(
        max_length=55,
        enum=Unidade,
        default=Unidade.UNIDADE
    )
    quantidade = models.CharField(max_length=5)
