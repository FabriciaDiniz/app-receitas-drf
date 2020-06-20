from rest_framework import serializers

from receitas.passos.models import Passos


class PassosSerializer(serializers.ModelSerializer):

    class Meta:
        model = Passos
        fields = '__all__'
