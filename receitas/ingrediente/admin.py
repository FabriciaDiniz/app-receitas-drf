from django.contrib import admin

from receitas.ingrediente.models import Ingrediente

class IngredienteAdmin(admin.ModelAdmin):
    pass

admin.site.register(Ingrediente, IngredienteAdmin)
