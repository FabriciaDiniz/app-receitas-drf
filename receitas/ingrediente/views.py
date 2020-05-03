from rest_framework.response import Response
from rest_framework import viewsets

from receitas.ingrediente.models import Ingrediente
from receitas.ingrediente.serializers import IngredienteSerializer


class IngredienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Ingrediente.objects.all()
    serializer_class = IngredienteSerializer



    # def retrieve(self, request, pk=None):
    #     pass
    #
    # def update(self, request, pk=None):
    #     pass
    #
    # # def partial_update(self, request, pk=None):
    # #     pass
    #
    # def destroy(self, request, pk=None):
    #     pass
