from rest_framework import serializers
from enumfields.drf.serializers import EnumSupportSerializerMixin

from receitas.receitaIngrediente.models import ReceitaIngrediente
from receitas.receita.serializers import ReceitaSerializer
from receitas.ingrediente.serializers import IngredienteSerializer


class ReceitaIngredienteSerializer(EnumSupportSerializerMixin, serializers.ModelSerializer):
    receita = ReceitaSerializer
    ingrediente = IngredienteSerializer

    class Meta:
        model = ReceitaIngrediente
        fields = '__all__'
        depth = 1
