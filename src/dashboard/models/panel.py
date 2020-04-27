from django.db import models
from django.contrib import admin
import enum

from ariadne import ObjectType, EnumType

class PanelSize(enum.Enum):
    SMALL = 'S'
    MEDIUM = 'M'
    LARGE = 'L'
    VERY_LARGE = 'XL'


class Panel(models.Model):

    # file to be embeded
    embed_url = models.URLField()

    # django only allows the first part of the tuple to be strings, so we have to convert these PanelSize enums to their respective string values

    SIZE_CHOICES = [
        (PanelSize.SMALL.value, 'small'),
        (PanelSize.MEDIUM.value, 'medium'),
        (PanelSize.LARGE.value, 'large'),
        (PanelSize.VERY_LARGE.value, 'very large')
    ]

    # utilizes an enum, but stores in string
    size = models.CharField(
        max_length=2,
        choices=SIZE_CHOICES,
        default=PanelSize.MEDIUM.value
    )

admin.site.register(Panel)


"""
GraphQL Resolvers
"""
resolver_panel = ObjectType('Panel')

@resolver_panel.field('embed_url')
def resolve_panel_embed_url(obj, *_) -> str:
    return obj.embed_url

@resolver_panel.field('size')
def resolve_panel_size(obj, *_) -> PanelSize:
    return PanelSize(obj.size)


resolver_panel_size = EnumType('PanelSize', PanelSize)
