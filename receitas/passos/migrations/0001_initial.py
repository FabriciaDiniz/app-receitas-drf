# Generated by Django 3.0.5 on 2020-06-16 02:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('receita', '0011_remove_receita_modo_de_preparo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Passos',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('ordem', models.IntegerField()),
                ('passo', models.TextField()),
                ('receita', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE, to='receita')),
            ],
        ),
    ]
