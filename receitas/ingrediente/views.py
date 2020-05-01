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

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    # def partial_update(self, request, pk=None):
    #     pass

    def destroy(self, request, pk=None):
        pass
