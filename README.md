# React SpaceX App

## Directory Structure

### src Directory

#### components

We keep all the components, configurations and services used by components in this directory. As application is not big, thus App component is taken as the main component and only shared-components(Reusable components) are kept in this directory.

#### scss-partials

All the reusable SCSS snippets are kept in this directory. This include SCSS variables, functions and mixins.

#### App.js

This is the main component that utilize all the shared components and services to build the application. Also this is the first component that gets rendered in the application.

#### App.scss

This SCSS files contains all the style rules for reset css, and classes that can be used by different component to acheive common styling. It imports all the partials created in the scss-partials.

#### styles.js

We have used 2 CSS preprocessor: SCSS and JSS. Each component in the application has its styles.js(in JSS format). "styles.js" consists of component specific styling. Advantage of JSS is that it renders the style on fly(that is when component loads).

### public

#### config

This directory consist of all the configuration that can be changed directly by the client. As these change in these configuration not requires to create the build again. To create such configuration, tweaking in webpack config is not required which requires ejection. To avoid ejection, We have used the "react-app-rewired" and mention the required settings in "config-overrides.js".

## Lighthouse Analysis Snapshot
![Lighthouse Analysis Snapshot](https://github.com/Yatin-Gupta/sapient-spacex-app/blob/master/spacex-lighthouse-analysis.PNG)
