# Generated by Django 3.0.5 on 2020-04-29 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ingrediente', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ingrediente',
            name='unidade',
            field=models.CharField(choices=[('UN', 'unidade'), ('XICARA', 'xícara'), ('TSP', 'colher de chá'), ('TBSP', 'colher de sopa')], max_length=10),
        ),
    ]
