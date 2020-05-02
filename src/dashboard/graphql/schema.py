import os
from pathlib import Path

from ariadne import (
    QueryType,
    gql,
    make_executable_schema,
    load_schema_from_path
)
from .query import resolver_query
from .mutation import resolver_mutation


"""
GraphQL SDL imports
"""
filedir_path = Path(os.path.dirname(__file__))

query_defs = gql(load_schema_from_path(filedir_path / 'query.graphql'))
mutation_defs = gql(load_schema_from_path(filedir_path / 'mutation.graphql'))
obj_defs = gql(load_schema_from_path(filedir_path / '../models/')) # import .graphql schemas for Django models


"""
GraphQL resolver imports
"""

from ..models.panel import Panel, PanelSize, resolver_panel, resolver_panel_size

resolvers = [
    resolver_query,
    resolver_mutation,
    resolver_panel_size,
    resolver_panel
]


schema = make_executable_schema([query_defs, mutation_defs, obj_defs], resolvers)