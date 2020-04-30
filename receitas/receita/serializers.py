from rest_framework import serializers

from receitas.receita.models import Receita, DIFICULDADE
from receitas.ingrediente.serializers import IngredienteSerializer


class ReceitaSerializer(serializers.ModelSerializer):
    ingredientes = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field='nome'
    )

    class Meta:
        model = Receita
        fields = ['nome', 'ingredientes', 'modo_de_preparo', 'dificuldade']
