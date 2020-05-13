from rest_framework import viewsets
from rest_framework.response import Response

from receitas.receitaIngrediente.models import ReceitaIngrediente
from receitas.receitaIngrediente.serializers import ReceitaIngredienteSerializer


class ReceitaIngredienteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = ReceitaIngrediente.objects.all()
    serializer_class = ReceitaIngredienteSerializer

    def retrieve(self, request, *args, **kwargs):
        path = request.path_info
        receita_id = path.split('/')[-1]
        ingredientes = ReceitaIngrediente.objects.filter(receita_id=receita_id)
        serializer = ReceitaIngredienteSerializer(ingredientes, many=True)
        return Response(serializer.data)

