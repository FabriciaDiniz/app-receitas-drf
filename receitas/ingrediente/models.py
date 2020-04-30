from django.db import models

UNIDADE = (
    ('UN', 'unidade'),
    ('XICARA', 'xícara'),
    ('TSP', 'colher de chá'),
    ('TBSP', 'colher de sopa'),
)


class Ingrediente(models.Model):
    def to_json(self):
        return json.dumps(
            default=lambda x: getattr(x, '__dict__', str(x))
        )

    nome = models.CharField(max_length=30)
    unidade = models.CharField(max_length=10, choices=UNIDADE)

    def __str__(self):
        return self.nome