from django.db import models

from receitas.ingrediente.models import Ingrediente

class Receita(models.Model):
    nome = models.CharField(max_length=50, default="Receita X")
    ingredientes = models.ForeignKey(Ingrediente, on_delete=models.DO_NOTHING)
    # quantidade = models.ManyToMany(Ingrediente)
    modo_de_preparo = models.TextField()
    dificuldade = models.CharField(max_length=1)

    def __str__(self):
        return self.nome