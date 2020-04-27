from ariadne import QueryType
from typing import List

resolver_query = QueryType()


from ..models.panel import Panel

@resolver_query.field('panel')
def resolve_panel(*_, id) -> Panel:
    return Panel.objects.filter(id=id)[0]

@resolver_query.field('allPanels')
def resolve_allpanels(*_) -> List[Panel]:
    return list(Panel.objects.all()) # QuerySet to list