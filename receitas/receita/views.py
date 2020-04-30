from rest_framework.response import Response
from rest_framework import viewsets

from receitas.receita.models import Receita
from receitas.receita.serializers import ReceitaSerializer


class ReceitaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    def list(self, request):
        queryset = Receita.objects.all()
        serializer = ReceitaSerializer(queryset, many=True)
        return Response(serializer.data)
