Button example:

A component that calls the `onClick` prop when clicked.

This component have 4 different levels of severity: `min`, `low`, `primary`, and `critical`. This property is purely visual.

```js
<Button level='min'>More Options</Button>
<Button>Revise</Button>
<Button level='low'>Cancel</Button>
<Button level='primary'>OK</Button>
<Button level='critical'>Delete</Button>
<Button disabled={true}>Disabled</Button>
```

Example of utilizing `onClick`
```js
function hello() {
    alert('Hello world!')
}

<Button onClick={hello}>Say Hello!</Button>
```