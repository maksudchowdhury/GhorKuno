# Generated by Django 4.0.2 on 2022-02-21 10:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_useraccount_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='profile_picture',
            field=models.ImageField(default='', upload_to=''),
        ),
    ]
