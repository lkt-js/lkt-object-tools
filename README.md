# LKT Object Tools

## Functions

### cloneObject
| Arg | Type   | Description         |
|-----|--------|---------------------|
| obj | object | Object to be cloned |

```ts
import {cloneObject} from "lkt-object-tools";

const obj = {lorem: 'ipsum'};
const obj2 = cloneObject(obj);
```

### sortObjectProperties
| Arg | Type   | Description         |
|-----|--------|---------------------|
| obj | object | Object to be sorted |

```ts
import {sortObjectProperties} from "lkt-object-tools";

const obj = {lorem: 'ipsum'};
const sortedObj = sortObjectProperties(obj);
```

### fetchInObject
| Arg       | Type   | Default | Description                                                                                     |
|-----------|--------|---------|-------------------------------------------------------------------------------------------------|
| obj       | object |         | Object to be sorted                                                                             |
| key       | string |         | Key used to iterate object                                                                      |
| separator | string | '.'     | Key separator. Each time this separator is reached, this function will treat as a nested object |

```ts
import {fetchInObject} from "lkt-object-tools";

const obj = {
    level1: {
        level2: {
            level3: {
                level4: 'Hi!'
            }
        }
    },
};

fetchInObject(obj, 'level1.level2.level3.level4'); // Returns "Hi!"
fetchInObject(obj, 'level1.level2.level3'); // Returns {level4: 'Hi!'}
```


### mergeObjects
Merge two objects. If there is a property in both, obj2 value will remain.

| Arg  | Type   | Description                |
|------|--------|----------------------------|
| obj1 | object | First object to be merged  |
| obj2 | object | Second object to be merged |

```ts
import {mergeObjects} from "lkt-object-tools";

const obj1 = {
    lorem: 'ipsum'
};
const obj2 = {
    dolor: 'sit amet'
};

mergeObjects(obj1, obj2); // Result: {lorem: 'ipsum', dolor: 'sit amet'};
```

### mergeCommonProperties
Same as mergeObjects, but only will merge props if exists in both objects

| Arg  | Type   | Description                |
|------|--------|----------------------------|
| obj1 | object | First object to be merged  |
| obj2 | object | Second object to be merged |

```ts
import {mergeCommonProperties} from "lkt-object-tools";

const obj1 = {
    lorem: 'ipsum'
};
const obj2 = {
    lorem: 'sit amet',
    dolor: 'sit amet'
};
const obj3 = {
    lorem: null
};

mergeCommonProperties(obj1, obj2); // Returns: {lorem: 'sit amet'};
mergeCommonProperties(obj1, obj3); // Returns: {lorem: 'ipsum'};
```

### deleteObjectProperties
Same as mergeObjects, but only will merge props if exists in both objects

| Arg  | Type     | Description                        |
|------|----------|------------------------------------|
| obj  | object   | Object where props will be removed |
| keys | string[] | An array with all the properties   |

```ts
import {deleteObjectProperties} from "lkt-object-tools";


const obj = {
    lorem: 'ipsum',
    name: 'test',
    description: 'description',
    align: 'center',
    isActive: true
}
deleteObjectProperties(obj, ['lorem', 'align', 'isActive']); // Returns: {name: 'test', description: 'description'}
```