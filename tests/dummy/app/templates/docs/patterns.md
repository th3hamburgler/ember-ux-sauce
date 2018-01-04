# Patterns

Here's a summary of the patterns we use and encourage authors to follow when extending this addon.

- [BEM All the Things](#bem-all-the-things)
- [Make Use of ember-test-selectors](#make-use-of-ember-test-selectors)
- [Create Accessible Components](#create-accessible-components)
- [Build Components on Top of the Shared Mixins](#build-components-on-top-of-the-shared-mixins)
- [Use Ember Prop Types](#use-ember-prop-types)

## BEM All the Things

Use [BEM Sauce](https://github.com/sauce-consultants/ember-bem-sauce) to add some BEM sugar to your components.

## Make Use of ember-test-selectors

[Test selectors](https://github.com/simplabs/ember-test-selectors) enable better element selectors in Ember.js tests. When designing components we try and use nested test selectors inline with the BEM style.

All components should allow the passing of a **name** parameter that will be used as the value for all test selectors. This helps authors target to elements when multiple instances exist.

In the case of components rendered in loops, either use model id's or a zero based index.

## Create Accessible Components

Write this

## Build Components on Top of the Shared Mixins

Write this

## Use Ember Prop Types

All UX components use the [ember-prop-types](https://github.com/ciena-blueplanet/ember-prop-types) addon to validate properties.
