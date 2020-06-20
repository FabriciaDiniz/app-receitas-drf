from rest_framework import viewsets
from rest_framework.response import Response

from receitas.ingrediente.models import Ingrediente
from receitas.ingrediente.serializers import IngredienteSerializer


class IngredienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Ingrediente.objects.all()
    serializer_class = IngredienteSerializer

    def retrieve(self, request, *args, **kwargs):
        path = request.path_info
        receita_id = path.split('/')[-1]
        ingredientes = Ingrediente.objects.filter(
            receita_id=receita_id)
        serializer = IngredienteSerializer(ingredientes, many=True)
        return Response(serializer.data)
