from rest_framework import serializers
from enumfields.drf.serializers import EnumSupportSerializerMixin

from receitas.receita.models import Receita


class ReceitaSerializer(EnumSupportSerializerMixin, serializers.ModelSerializer):

    class Meta:
        model = Receita
        fields = '__all__'
