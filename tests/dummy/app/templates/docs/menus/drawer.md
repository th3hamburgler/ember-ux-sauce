# Drawers

Navigation drawers provide access to destinations in your app. They can either be permanently on-screen or controlled by a navigation menu icon.

Navigation drawers are recommended for:

Apps with five or more top-level destinations
Apps with two or more levels of navigation hierarchy
Quick navigation between unrelated destinations

## Standard

Standard navigation drawers allow users to simultaneously access drawer destinations and app content. They are often co-planar with app content and affect the screen’s layout grid.

Standard drawers can be permanently visible or opened and closed by tapping a navigation menu icon. They can be used on tablet and desktop only. On mobile, modal drawers are used instead.

{{docs/uxs-drawer/basic-demo}}

## Modal

Modal navigation drawers use an overlay to block interaction with the rest of an app’s content. They are elevated above most app elements and don’t affect the screen’s layout grid.

They are primarily for use on mobile, where screen space is limited. They can be replaced by standard drawers on tablet and desktop.

{{docs/uxs-drawer/modal-demo}}

## Bottom

Bottom navigation drawers are a specialized type of modal drawer for use with a bottom app bar.

For increased reachability from the bottom app bar’s menu icon, they open from the bottom of the screen rather than the side.

{{docs/uxs-drawer/bottom-demo}}


[API Docs](/docs/api/components/uxs-drawer)
