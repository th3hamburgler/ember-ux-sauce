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

  const classDiff = arrayDiff(elementClasees, classArray);
  let diffString = '';
  if (classDiff) {
    diffString = ". Missing: " + classDiff.join(" ");
  }

  assert.equal(
    elementClasees.length,
    classArray.length,
    `Has correct amount of classes${diffString}`
  );
}

function arrayDiff(arrA, arrB) {
  return arrA
    .filter(x => !arrB.includes(x))
    .concat(arrB.filter(x => !arrA.includes(x)));
}