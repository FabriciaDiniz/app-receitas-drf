# Generated by Django 3.0.5 on 2020-04-29 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ingrediente', '0002_auto_20200429_1947'),
        ('receita', '0002_receita_nome'),
    ]

    operations = [
        migrations.AlterField(
            model_name='receita',
            name='dificuldade',
            field=models.CharField(choices=[('MF', 'muito fácil'), ('F', 'fácil'), ('M', 'médio'), ('D', 'difícil'), ('MD', 'muito difícil')], max_length=2),
        ),
        migrations.RemoveField(
            model_name='receita',
            name='ingredientes',
        ),
        migrations.AddField(
            model_name='receita',
            name='ingredientes',
            field=models.ManyToManyField(to='ingrediente.Ingrediente'),
        ),
        migrations.AlterField(
            model_name='receita',
            name='nome',
            field=models.CharField(default='', max_length=50),
        ),
    ]
