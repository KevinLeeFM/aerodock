from django.db import models
from django.contrib import admin

# Create your models here.
class Panel(models.Model):

    embed = models.URLField(verbose_name='Embed Link')
    
    # panel size
    SMALL = 'S'
    MEDIUM = 'M'
    LARGE = 'L'
    VERY_LARGE = 'XL'

    SIZE_CHOICES = [
        (SMALL, 'small'),
        (MEDIUM, 'medium'),
        (LARGE, 'large'),
        (VERY_LARGE, 'very large')
    ]

    size = models.CharField(
        max_length=2,
        choices=SIZE_CHOICES,
        default=MEDIUM
    )

admin.site.register(Panel)