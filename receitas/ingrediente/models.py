from django.db import models

class Ingrediente(models.Model):
    nome = models.CharField(max_length=30)
    unidade = models.CharField(max_length=30)
