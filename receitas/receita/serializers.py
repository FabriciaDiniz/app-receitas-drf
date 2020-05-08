from rest_framework import serializers

from receitas.receita.models import Receita


class ReceitaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Receita
        fields = '__all__'

    def create(self, validated_data):
        receita = Receita.objects.create(**validated_data)
        return receita