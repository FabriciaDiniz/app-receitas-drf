from django.contrib import admin

from receitas.receita.models import Receita

class ReceitaAdmin(admin.ModelAdmin):
    pass

admin.site.register(Receita, ReceitaAdmin)
