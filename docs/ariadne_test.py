from ariadne import (
    QueryType,
    ObjectType,
    gql,
    make_executable_schema, 
    snake_case_fallback_resolvers
)
from ariadne.asgi import GraphQL

type_defs = gql("""
    type Query {
        hello: String!
        user: User!
    }

    type User {
        username: String!
    }
""")

query = QueryType()
@query.field('hello')
def resolve_hello(_, info) -> str:
    request = info.context['request']
    user_agent = request.headers.get('user_agent', 'guest')

    return 'Hello, {}'.format(user_agent)

@query.field('user')
def resolve_user(_, info) -> str:
    return info.context['user']

user = ObjectType('User')
@user.field('username')
def resolve_user_username(obj, *_) -> str:
    return 'Kevin'

schema = make_executable_schema(type_defs, query, user, snake_case_fallback_resolvers)

# starts a GraphQL client if using ASGI servers such as uvicorn
app = GraphQL(schema, debug=True)