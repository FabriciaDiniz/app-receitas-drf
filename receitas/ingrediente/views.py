from rest_framework.response import Response
from rest_framework import viewsets

from receitas.ingrediente.models import Ingrediente
from receitas.ingrediente.serializers import IngredienteSerializer


class IngredienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def list(self, request):
        queryset = Ingrediente.objects.all()
        serializer = IngredienteSerializer(queryset, many=True)
        return Response(serializer.data)
