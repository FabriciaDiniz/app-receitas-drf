from rest_framework.routers import SimpleRouter

from receitas.receita.views import ReceitaViewSet
from receitas.ingrediente.views import IngredienteViewSet
from receitas.passos.views import PassosViewSet

router = SimpleRouter(trailing_slash=False)
router.register('receitas', ReceitaViewSet, basename='receitas')
router.register('ingredientes', IngredienteViewSet, basename='ingredientes')
router.register('passos', PassosViewSet, basename='passos')

urlpatterns = router.urls
