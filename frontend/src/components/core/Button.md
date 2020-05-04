Button example:

A component that calls the `onClick` prop when clicked.

This component have 4 different levels of severity: `min`, `low`, `primary`, and `critical`. This property is purely visual.

```js
<Button name='More Options' level='min'></Button>
<Button name='Revise'></Button>
<Button name='Cancel' level='low'></Button>
<Button name='OK' level='primary'></Button>
<Button name='Delete' level='critical'></Button>
```

Example of utilizing `onClick`
```js
function hello() {
    alert('Hello world!')
}

<Button name='Say Hello' onClick={hello}></Button>
```