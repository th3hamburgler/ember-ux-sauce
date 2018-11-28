# Quickstart

This quickstart guide will get you going with a docs site for your brand new addon.

1 - **Install the addon.**

    yarn add ember-ux-sauce

2 - **Install ember-cli-sass**

    yarn add ember-cli-sass

3 - **Add styles** to your app.scss file

    @import "uxs";

4 - **Restart Ember Server**

# Customising Sass

You can control much of the UX toolkits look and feel with sass variables.

To override the defaults:

1 - Create a new sass file to hold your custom variables

    touch app/styles/_settings.uxs.scss

2 - Add it to _app.scss_ before you include the uxs files

    @import "settings.uxs";
    @import "uxs";

3 - (Optional) Include uxs tools.functions file so it can be used in your settings

    in settings.uxs.scss

    @import "uxs/tools.functions";

4 - Override variables

    @import "uxs/tools.functions";

    $c-primary: #2682C4;
    $c-accent : #4A74B7;
    $c-success: #8FC93A;
    $c-error  : #D84F4F;
    $c-warning: #FFC031;
    $c-dark   : #001021;
