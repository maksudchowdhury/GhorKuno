# Generated by Django 4.0.2 on 2022-03-29 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GhorKuno', '0008_alter_shopinfo_shopname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shopinfo',
            name='offerBDT',
            field=models.IntegerField(blank=True, default=-1, null=True),
        ),
        migrations.AlterField(
            model_name='shopinfo',
            name='offerPercentage',
            field=models.IntegerField(blank=True, default=-1, null=True),
        ),
    ]