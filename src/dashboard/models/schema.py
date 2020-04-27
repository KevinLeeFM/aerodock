from ariadne import (
    QueryType,
    gql,
    make_executable_schema,
    load_schema_from_path
)
from .panel import Panel, PanelSize, resolver_panel, resolver_panel_size
from typing import List

query_defs = gql("""
    type Query {
        panel(id: Int!): Panel!
        allPanels: [Panel!]!
    }
""")

obj_defs = gql(load_schema_from_path('.'))


query = QueryType()

@query.field('panel')
def resolve_panel(*_, id) -> Panel:
    return Panel.objects.filter(id=id)[0]

@query.field('allPanels')
def resolve_allpanels(*_) -> List[Panel]:
    return list(Panel.objects.all()) # QuerySet to list

resolvers = [
    query,
    resolver_panel_size,
    resolver_panel
]

schema = make_executable_schema([query_defs, obj_defs], resolvers)