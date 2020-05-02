from ariadne import MutationType

resolver_mutation = MutationType()

from ..models.panel import Panel, PanelSize

@resolver_mutation.field('addPanel')
def resolve_addpanel(*_, embed_url: str, size: PanelSize=PanelSize.MEDIUM) -> bool:
    
    try:
        # size.value since Django only accepts the values of the enums
        p = Panel(embed_url=embed_url, size=size.value)
        p.save()
    except Exception as e:
        print('Error in addPanel mutation: ' + str(e))
        return False
    
    return True

@resolver_mutation.field('removePanel')
def resolve_removepanel(*_, id: int) -> bool:
    
    qset = Panel.objects.filter(id=id)
    assert(len(qset) <= 1) # make sure that the id acquired is unique to one panel

    if len(qset) == 0:
        return False
    else:
        qset.delete()
        return True