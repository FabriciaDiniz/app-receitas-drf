from rest_framework import serializers

from receitas.receita.models import Ingrediente


class IngredienteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingrediente
        fields = ['nome', 'unidade']
