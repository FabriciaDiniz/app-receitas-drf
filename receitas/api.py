from rest_framework.routers import SimpleRouter

from receitas.receita.views import ReceitaViewSet

router = SimpleRouter(trailing_slash=False)
router.register('receitas', ReceitaViewSet, basename='receitas')

urlpatterns = router.urls
