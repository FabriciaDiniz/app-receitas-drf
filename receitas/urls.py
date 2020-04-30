from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('receitas/', include('receitas.receita.urls')),
    path('ingredientes/', include('receitas.ingrediente.urls')),
    path('admin/', admin.site.urls),
]
