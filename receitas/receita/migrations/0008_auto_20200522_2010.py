# Generated by Django 3.0.5 on 2020-05-22 23:10

from django.db import migrations
import enumfields.fields
import receitas.receita.models


class Migration(migrations.Migration):

    dependencies = [
        ('receita', '0007_auto_20200522_2003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='receita',
            name='categoria',
            field=enumfields.fields.EnumField(default='GE', enum=receitas.receita.models.Categorias, max_length=10),
        ),
    ]
