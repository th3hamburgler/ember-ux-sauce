# Patterns

Here's a summary of the patterns we use and encourage authors to follow when extending this addon.

-   [BEM All the Things](#bem-all-the-things)
-   [Make Use of ember-test-selectors](#make-use-of-ember-test-selectors)
-   [Create Accessible Components](#create-accessible-components)
-   [Build Components on Top of the Shared Mixins](#build-components-on-top-of-the-shared-mixins)
-   [Use Ember Prop Types](#use-ember-prop-types)

## BEM All the Things

Use [BEM Sauce](https://github.com/sauce-consultants/ember-bem-sauce) to add some BEM sugar to your components.

## Make Use of ember-test-selectors

[Test selectors](https://github.com/simplabs/ember-test-selectors) enable better element selectors in Ember.js tests. When designing components we try and use nested test selectors inline with the BEM style.

All components should allow the passing of a **name** parameter that will be used as the value for all test selectors. This helps authors target to elements when multiple instances exist.

In the case of components rendered in loops, either use model id's or a zero based index.

## Use Closure Actions

[Stop bubbling actions and use closure actions](https://dockyard.com/blog/2015/10/29/ember-best-practice-stop-bubbling-and-use-closure-actions)

## Create Accessible Components

Write this

## Addons

### [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown)

This is a very minimal dropdown. That means that it is agnostic about what it is going to contain.

It is intended to be a building block for more complex components but is perfectly usable. It is by example the addon on which ember-power-select or ember-paper's menu component are built upon.

### [ember-bem-sauce](https://github.com/sauce-consultants/ember-bem-sauce)

ember-bem-sauce helps you write BEM components. Make your templates cleaner with the help of the bem helper and the bem component mixin. By defining all your components modifiers in one place you will dry up your template files.

### [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers)

Composable helpers for Ember that enables more declarative templating.

### [ember-moment](https://github.com/stefanpenner/ember-moment)

moment.js template helpers and computed property macros for Ember

### [ember-cli-string-helpers](https://github.com/romulomachado/ember-cli-string-helpers)

Set of the String helpers extracted from DockYard's ember-composable-helpers.

### [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass)

ember-cli-sass uses Dart Sass to preprocess your ember-cli app's files and provides support for source maps and include paths. It provides support for the common use case for Ember.js projects:

### [ember-power-select](https://github.com/cibernox/ember-power-select)

Ember Power Select is a select component written in Ember with a focus in flexibility and extensibility.

It is designed to work well with the way we build Ember apps, so it plays nicely with promises, ember-concurrency's tasks, ember-data collections and follows idiomatic patterns.

### [ember-cp-validations](https://github.com/offirgolan/ember-cp-validations)

An EmberJS validation framework that is completely and utterly computed property based.

### [ember-flatpickr](https://github.com/shipshapecode/ember-flatpickr)

This is an Ember addon that wraps the date picker flatpickr. It uses ember-cli-node-assets to pull in flatpickr from npm.

### [ember-modal-dialog](https://github.com/yapplabs/ember-modal-dialog)

The ember-modal-dialog addon provides components to implement modal dialogs throughout an Ember application using a simple, consistent pattern.

### [ember-svg-jar](https://github.com/ivanvotti/ember-svg-jar)

The best way to embed SVG images into your Ember application. The viewer is available at: [http://localhost:4200/ember-svg-jar/index.html]

### [ember-test-selectors](https://github.com/simplabs/ember-test-selectors)

Enabling better element selectors in Ember.js tests

### [ember-tether](https://github.com/yapplabs/ember-tether)

Tether an element to another element in the DOM

### [ember-toggle](https://github.com/knownasilya/ember-toggle)

Checkbox based Toggle Switch component with swipe/drag support for Ember.

### [ember-cli-addon-doc](https://github.com/ember-learn/ember-cli-addon-docs)

Easy documentation for Ember addons.
