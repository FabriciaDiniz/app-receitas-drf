from rest_framework import serializers

from receitas.ingrediente.models import Ingrediente
from receitas.receita.serializers import ReceitaSerializer


class IngredienteSerializer(serializers.ModelSerializer):
    receita = ReceitaSerializer

    class Meta:
        model = Ingrediente
        fields = '__all__'
