Example

```js
<React.Fragment>
    <p>What do you want for lunch today?</p>
    <ExclusiveSelect choiceHandler={c => {alert(c)}}>
        <Option name='ice_cream'>I scream for ice cream!</Option>
        <Option name='pancake'>Mmm pancakes</Option>
        <Option name='coffee'>Just coffee</Option>
    </ExclusiveSelect>
</React.Fragment>
```