from django.db import models

from receitas.receita.models import Receita
from receitas.ingrediente.models import Ingrediente

UNIDADE = (
    ('UN', 'unidade'),
    ('XICARA', 'xícara'),
    ('TSP', 'colher de chá'),
    ('TBSP', 'colher de sopa'),
    ('G', 'gramas'),
    ('ML', 'mL'),
    ('PITADA', 'pitada'),
    ('A GOSTO', 'a gosto'),
    ('CAIXA', 'caixa'),
    ('LATA', 'lata'),
)


class ReceitaIngrediente(models.Model):

    receita = models.ForeignKey(Receita, on_delete=models.CASCADE)
    ingrediente = models.ForeignKey(Ingrediente, on_delete=models.CASCADE)
    unidade = models.CharField(max_length=10, choices=UNIDADE)
    quantidade = models.CharField(max_length=5)
