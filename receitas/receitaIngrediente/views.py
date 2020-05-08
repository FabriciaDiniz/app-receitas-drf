from rest_framework import viewsets

from receitas.receitaIngrediente.models import ReceitaIngrediente
from receitas.receitaIngrediente.serializers import ReceitaIngredienteSerializer


class ReceitaIngredienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = ReceitaIngrediente.objects.all()
    serializer_class = ReceitaIngredienteSerializer
