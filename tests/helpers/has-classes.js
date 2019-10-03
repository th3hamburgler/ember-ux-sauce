export default function hasClasses(assert, element, classArray) {
  if (!element) {
    throw Error("hasClasses element is null")
  }
  const classString = element.getAttribute('class'),
    elementClasees = classString.split(" ");

  // push default classes onto stack
  classArray.push('uxs');
  classArray.push('ember-view');

  for (var className of classArray) {
    assert.equal(elementClasees.includes(className), true, `Has class ${className}`);
  }

  assert.equal(elementClasees.length, classArray.length, `Has correct amount of classes ${classString}`);
}