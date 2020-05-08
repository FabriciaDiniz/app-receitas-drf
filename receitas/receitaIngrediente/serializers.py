from rest_framework import serializers

from receitas.receitaIngrediente.models import ReceitaIngrediente
from receitas.receita.serializers import ReceitaSerializer
from receitas.ingrediente.serializers import IngredienteSerializer


class ReceitaIngredienteSerializer(serializers.ModelSerializer):
    receita = ReceitaSerializer
    ingrediente = IngredienteSerializer

    class Meta:
        model = ReceitaIngrediente
        fields = '__all__'

    def create(self, validated_data):
        receita_data = validated_data.pop('receita')
        ingrediente_data = validated_data.pop('ingrediente')
        rec_ing = ReceitaIngrediente.objects.create(**validated_data)
        rec_ing.receita.set(receita_data)
        rec_ing.ingrediente.set(ingrediente_data)
        return rec_ing