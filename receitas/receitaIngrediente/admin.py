from django.contrib import admin

from receitas.receitaIngrediente.models import ReceitaIngrediente

class ReceitaIngredienteAdmin(admin.ModelAdmin):
    pass

admin.site.register(ReceitaIngrediente, ReceitaIngredienteAdmin)
