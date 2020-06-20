from rest_framework import viewsets
from rest_framework.response import Response

from receitas.passos.models import Passos
from receitas.passos.serializers import PassosSerializer


class PassosViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = Passos.objects.all()
    serializer_class = PassosSerializer

    def retrieve(self, request, *args, **kwargs):
        path = request.path_info
        receita_id = path.split('/')[-1]
        passos = Passos.objects.filter(receita_id=receita_id)
        serializer = PassosSerializer(passos, many=True)
        return Response(serializer.data)
