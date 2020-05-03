from django.http import Http404
from rest_framework import viewsets, status
from rest_framework.response import Response

from receitas.receita.models import Receita
from receitas.receita.serializers import ReceitaSerializer


class ReceitaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

