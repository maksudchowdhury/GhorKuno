# Generated by Django 4.0.2 on 2022-03-03 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_useraccount_options_useraccount_area_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfileInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(default=-1)),
                ('is_profile_updated', models.BooleanField(default=False)),
                ('is_chef', models.BooleanField(default=False)),
                ('first_name', models.CharField(default='', max_length=255)),
                ('last_name', models.CharField(default='', max_length=255)),
                ('house_name', models.CharField(default='', max_length=255)),
                ('road_no', models.CharField(default='', max_length=255)),
                ('block_no', models.CharField(default='', max_length=255)),
                ('area', models.CharField(default='', max_length=255)),
                ('city', models.CharField(default='', max_length=255)),
                ('district', models.CharField(default='', max_length=255)),
                ('mobilePhone', models.CharField(default='', max_length=20)),
                ('updatedTime', models.DateTimeField(auto_now=True)),
                ('createdTime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='area',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='block_no',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='city',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='district',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='house_name',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='last_name',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='mobilePhone',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='profile_picture',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='road_no',
        ),
    ]
