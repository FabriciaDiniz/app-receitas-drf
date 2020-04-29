from rest_framework import serializers

from receitas.receita.models import Receita


class ReceitaSerializer(serializers.Serializer):
    nome = serializers.CharField(max_length=50)

    class Meta:
        model = Receita
        fields = ['nome']
