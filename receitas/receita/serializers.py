from rest_framework import serializers

from receitas.receita.models import Receita
from receitas.ingrediente.serializers import IngredienteSerializer


class ReceitaSerializer(serializers.ModelSerializer):
    ingredientes = IngredienteSerializer

    class Meta:
        model = Receita
        fields = '__all__'

    def create(self, validated_data):
        ingrediente_data = validated_data.pop('ingredientes')
        print(ingrediente_data)
        receita = Receita.objects.create(**validated_data)
        receita.ingredientes.set(ingrediente_data)
        return receita