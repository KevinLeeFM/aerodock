from django.urls import path

from ariadne.contrib.django.views import GraphQLView

from . import views
from .graphql.schema import schema

urlpatterns = [
    path('', views.index, name='index'),
    path('graphql/', GraphQLView.as_view(schema=schema), name='graphql')
]