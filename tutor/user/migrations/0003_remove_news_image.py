# Generated by Django 4.2 on 2023-04-18 06:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_image_news'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='image',
        ),
    ]
