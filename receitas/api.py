from rest_framework.routers import SimpleRouter

from receitas.receita.views import ReceitaViewSet
from receitas.ingrediente.views import IngredienteViewSet
from receitas.receitaIngrediente.views import ReceitaIngredienteViewSet

router = SimpleRouter(trailing_slash=False)
router.register('receitas', ReceitaViewSet, basename='receitas')
router.register('ingredientes', IngredienteViewSet, basename='ingredientes')
router.register('receita-ingredientes', ReceitaIngredienteViewSet, basename='receita-ingrediente')

urlpatterns = router.urls