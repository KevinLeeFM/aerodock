Example

```js
import cardHuge from '../../assets/svg/card_huge.svg';
import iconPuzzle from '../../assets/svg/icon-puzzle.svg';

<React.Fragment>
    <IconPed src={cardHuge}>OK</IconPed>
    <br/>
    <IconPed src={iconPuzzle}>Plug-ins</IconPed>
</React.Fragment>
```

```js
import ExclusiveSelect from './ExclusiveSelect';
import Button from './Button';

import cardSmall from '../../assets/svg/card_small.svg';
import cardMedium from '../../assets/svg/card_medium.svg';
import cardLarge from '../../assets/svg/card_large.svg';
import cardHuge from '../../assets/svg/card_huge.svg';

<React.Fragment>
    <ExclusiveSelect onValueChange={c => {alert(c)}}>
        <Option name='small'><IconPed src={cardSmall}>Small</IconPed></Option>
        <Option name='medium'><IconPed src={cardMedium}>Medium</IconPed></Option>
        <Option name='large'><IconPed src={cardLarge}>Large</IconPed></Option>
        <Option name='huge'><IconPed src={cardHuge}>Huge</IconPed></Option>
    </ExclusiveSelect>
</React.Fragment>
```