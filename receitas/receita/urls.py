from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'', views.ReceitaViewSet.as_view({'get': 'list'}), name='receitas'),
]
