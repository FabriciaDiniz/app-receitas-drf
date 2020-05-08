from rest_framework import viewsets

from receitas.receita.models import Receita
from receitas.receita.serializers import ReceitaSerializer


class ReceitaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

