from rest_framework import serializers
from enumfields.drf.serializers import EnumSupportSerializerMixin

from receitas.receita.models import Receita
from receitas.ingrediente.models import Ingrediente
from receitas.ingrediente.serializers import IngredienteSerializer
from receitas.passos.models import Passos
from receitas.passos.serializers import PassosSerializer


class ReceitaSerializer(EnumSupportSerializerMixin, serializers.ModelSerializer):

    ingredientes = serializers.SerializerMethodField()
    passos = serializers.SerializerMethodField()

    class Meta:
        model = Receita
        fields = '__all__'

    def get_ingredientes(self, obj):
        try:
            ingredientes = Ingrediente.objects.filter(receita_id=obj.id)
            serializer = IngredienteSerializer(ingredientes, many=True)
            return serializer.data
        except:
            return None

    def get_passos(self, obj):
        try:
            passos = Passos.objects.filter(receita_id=obj.id)
            serializer = PassosSerializer(passos, many=True)
            return serializer.data
        except:
            return None
