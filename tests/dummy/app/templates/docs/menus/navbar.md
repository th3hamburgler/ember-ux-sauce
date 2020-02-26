# NavBar

The nav bar displays information and actions relating to the global application.

On desktop the main menu is displayed in this bar. On mobile a menu button will display items in a draw.

## Simple Example

The following shows a simple menu with one menu on mobile and desktop.

{{docs/uxs-nav-bar/basic-demo}}

## Logo Example

The following shows the same bar but with an svg logo instead of a text title.

{{docs/uxs-nav-bar/logo-demo}}

## Mobile Example

The following shows a nav bar with mobile draw for the menu.

We use the _bar.drawerToggle_ and _bar.modal_ to render a hamburger menu and ember-modal-dialog tethered to the left side of the screen.

The modal yeilds a _uxs-drawer_ component for standard mobile menu interface but you can also use any other component inside the modal.

{{docs/uxs-nav-bar/drawer-demo}}

[API Docs](/docs/api/components/uxs-nav-bar)
