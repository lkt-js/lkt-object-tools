import {cloneObject, deleteObjectProperties, fetchInObject, mergeCommonProperties, mergeObjects, sortObjectProperties} from "../src";


test('clone object', () => {
  const obj = {lorem: 'ipsum'};

  expect(cloneObject(obj)).toEqual({lorem: 'ipsum'});
  expect(cloneObject(obj)).toEqual(obj);
});

test('sort object', () => {
  const obj = {
    lorem: 'ipsum',
    name: 'test',
    description: 'description',
    align: 'center',
    isActive: true
  };

  expect(JSON.stringify(sortObjectProperties(obj))).toEqual(JSON.stringify({
    align: 'center',
    description: 'description',
    isActive: true,
    lorem: 'ipsum',
    name: 'test'
  }));
});

test('fetch in object', () => {
  const obj = {
    level1: {
      level2: {
        level3: {
          level4: 'Hi!'
        }
      }
    },
  };

  expect(fetchInObject(obj, 'level1.level2.level3.level4')).toEqual('Hi!');
  expect(JSON.stringify(fetchInObject(obj, 'level1.level2.level3'))).toEqual(JSON.stringify({level4: 'Hi!'}));
  expect(fetchInObject(obj, 'level1/level2/level3/level4', '/')).toEqual('Hi!');
  expect(fetchInObject(obj, 'level1->level2->level3->level4', '->')).toEqual('Hi!');
});

test('merge objects', () => {
  const obj1 = {
    lorem: 'ipsum'
  };
  const obj2 = {
    dolor: 'sit amet'
  };

  expect(JSON.stringify(mergeObjects(obj1, obj2))).toEqual(JSON.stringify({lorem: 'ipsum', dolor: 'sit amet'}));
});

test('safe merge objects', () => {
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

  expect(JSON.stringify(mergeCommonProperties(obj1, obj2))).toEqual(JSON.stringify({lorem: 'sit amet'}));
  expect(JSON.stringify(mergeCommonProperties(obj1, obj3))).toEqual(JSON.stringify({lorem: 'ipsum'}));
});

test('delete object keys', () => {
  const obj = {
    lorem: 'ipsum',
    name: 'test',
    description: 'description',
    align: 'center',
    isActive: true
  }
  expect(JSON.stringify(deleteObjectProperties(obj, ['lorem', 'align', 'isActive']))).toEqual(JSON.stringify({name: 'test', description: 'description'}))
});