from django.contrib import admin

from receitas.passos.models import Passos


class PassosAdmin(admin.ModelAdmin):
    pass


admin.site.register(Passos, PassosAdmin)
