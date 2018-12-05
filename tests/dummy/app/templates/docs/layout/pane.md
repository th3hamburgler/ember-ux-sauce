# Panes

Pane components are used inside a window to layout content.

To see a full api check out the [api page](../api/components/uxs-pane)

## Splash Layout

The splash pane will position content in the middle of the window. This layout is also perfect for using in conjunction with a uxs-window with a background image.

{{docs/uxs-pane/splash}}

## Single Layout

The single layout places content in one large pane.

{{docs/uxs-pane/single}}

Main & Aside Layout

The main pane will take up the majority of the window width a side pane taking up the rest.

On mobile devices panes will be stacked vertically with the aside pane appearing first.

{{docs/uxs-pane/main-aside}}

## Split Layout

Two columns will be spaced evenly.

On mobile devices panes will be stacked vertically.

{{docs/uxs-pane/split}}

## Three Column Layout

Three panes, an index, detail and aside. This layout is designed to display the following:

-   A list of records
-   Details for an individual record
-   Actions & Meta data

On mobile devices panes will be stacked vertically with the aide pane displayed first and the index pane hidden.

{{docs/uxs-pane/threes}}

## Custom ordering on mobile

The order panes are stacked on mobile views can be customised by setting the order attribute of a pane. The order attribute supports numbers from 1-9.

{{args-table/size-options}}
{{args-table/style-options}}
