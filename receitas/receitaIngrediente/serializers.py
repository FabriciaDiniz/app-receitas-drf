from rest_framework import serializers

from receitas.receitaIngrediente.models import ReceitaIngrediente
from receitas.receita.serializers import ReceitaSerializer
from receitas.ingrediente.serializers import IngredienteSerializer

from receitas.receita.models import Receita
from receitas.ingrediente.models import Ingrediente


class ReceitaIngredienteSerializer(serializers.ModelSerializer):
    receita = ReceitaSerializer
    ingrediente = IngredienteSerializer

    class Meta:
        model = ReceitaIngrediente
        fields = '__all__'
        depth = 1
