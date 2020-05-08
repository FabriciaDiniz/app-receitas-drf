from django.db import models

class Ingrediente(models.Model):

    nome = models.CharField(max_length=30)

    def __str__(self):
        return self.nome