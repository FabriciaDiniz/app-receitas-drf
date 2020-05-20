from rest_framework import serializers

from receitas.receita.models import Receita, Dificuldade, Categorias


class ReceitaSerializer(serializers.ModelSerializer):

    dificuldade = serializers.ChoiceField(Dificuldade.choices)
    categoria = serializers.ChoiceField(Categorias.choices)

    class Meta:
        model = Receita
        fields = '__all__'

    def create(self, validated_data):
        receita = Receita.objects.create(**validated_data)
        return receita
