Example with ExclusiveSelect

```js
import ExclusiveSelect from '../ExclusiveSelect/ExclusiveSelect';
import Choice from '../ExclusiveSelect/Choice';

<Form onValueChange={(k, v) => {
    // console.log(`Lunch Choice: ${v.lunchChoice} \n Hair Style: ${v.hairStyle}`);

    alert(`${k} is now ${v}`);
}}>
    <p>Lunch Choice:</p>
    <ExclusiveSelect name='lunchChoice'>
        <Choice name='ice_cream'>I scream for ice cream!</Choice>
        <Choice name='pancake'>Mmm pancakes</Choice>
        <Choice name='coffee'>Just coffee</Choice>
    </ExclusiveSelect>
    <hr/>
    <p>Hair Style:</p>
    <ExclusiveSelect name='hairStyle'>
        <Choice name='curly'>Curly</Choice>
        <Choice name='buzz'>Buzz Cut</Choice>
        <Choice name='bald'>Bald</Choice>
    </ExclusiveSelect>
</Form>
```