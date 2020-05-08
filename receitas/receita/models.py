from django.db import models

DIFICULDADE = (
    ('MF', 'muito fácil'),
    ('F', 'fácil'),
    ('M', 'médio'),
    ('D', 'difícil'),
    ('MD', 'muito difícil'),
)


class Receita(models.Model):
    nome = models.CharField(max_length=50, default="")
    modo_de_preparo = models.TextField()
    dificuldade = models.CharField(max_length=2, choices=DIFICULDADE)

    def __str__(self):
        return self.nome