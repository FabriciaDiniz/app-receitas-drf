from rest_framework import serializers

from receitas.passos.models import Passos
from receitas.receita.serializers import ReceitaSerializer


class PassosSerializer(serializers.ModelSerializer):
    receita = ReceitaSerializer

    class Meta:
        model = Passos
        fields = '__all__'
