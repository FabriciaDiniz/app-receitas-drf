from django.db import models

from receitas.receita.models import Receita


class Passos(models.Model):
    receita = models.ForeignKey(Receita, on_delete=models.CASCADE)
    ordem = models.IntegerField()
    passo = models.TextField()

    def __str__(self):
        return self.passo

    class Meta:
        ordering = ('ordem',)
