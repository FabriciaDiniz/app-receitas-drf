from django.shortcuts import render

from rest_framework import viewsets

from receitas.passos.models import Passos
from receitas.passos.serializers import PassosSerializer


class PassosViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Passos.objects.all()
    serializer_class = PassosSerializer
