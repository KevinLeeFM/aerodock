# GraphQL Overview By Examples

Source: https://www.howtographql.com/basics/

## Query/Mutation/Subscription

*Basic query*

```
{
  allPersons {
    name
    age
  }
}
```

*Arguments*
```
{
  allPersons(last: 2) {
    name
  }
}
```

*Mutation*
```
mutation {
  createPerson(name: "Bob", age: 36) {
    name
    age
  }
}
```
which returns
```
"createPerson": {
  "name": "Bob",
  "age": 36,
}
```

*Subscription*
```
subscription {
  newPerson {
    name
    age
  }
}
```
which returns such whenever e.g. a new person is created
```
{
  "newPerson": {
    "name": "Jane",
    "age": 23
  }
}
```

# Schema
Root type schema
```
type Query {
  allPersons: [Person!]!
}

type Mutation {
  createPerson(name: String!, age: Int!): Person!
}

type Subscription {
  newPerson: Person!
}
```
