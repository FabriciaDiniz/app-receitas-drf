from rest_framework import viewsets

from receitas.ingrediente.models import Ingrediente
from receitas.ingrediente.serializers import IngredienteSerializer


class IngredienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Ingrediente.objects.all()
    serializer_class = IngredienteSerializer
