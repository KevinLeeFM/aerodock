# Generated by Django 3.0.5 on 2020-04-26 22:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_auto_20200426_1834'),
    ]

    operations = [
        migrations.RenameField(
            model_name='panel',
            old_name='embed',
            new_name='embed_url',
        ),
    ]
