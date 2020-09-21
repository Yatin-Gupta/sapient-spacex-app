# React SpaceX App

## Directory Structure

### "src" Directory

#### "components" Directory

This directory is used to keep all the components(except App(main) component), configurations and services. As application is not big, thus and only shared-components(Reusable components) are kept in this directory.

#### "scss-partials" Directory

All the reusable SCSS snippets are kept in this directory. This include SCSS variables, functions and mixins.

#### "App.js" File

This is the main component that utilize all the shared components and services to build the application. Also this is the first component that gets rendered in the application.

#### "App.scss" File
 
This SCSS files contains all the style rules for "reset css", and classes that can be used by different component to acheive "common" styling. It imports all the partials created in the "scss-partials" directory.

#### "styles.js" File

Two CSS preprocessor are used in the application: SCSS(.scss extension) and JSS(.js extension).<br />
Each component created in the application has its own "styles.js"(in JSS format). "styles.js" consists of component specific styling.<br />
Advantage of JSS is that it renders the style on fly(that is when component loads).

### "public" Directory

#### "config" Directory

This directory consist of configurations that can be changed directly by the client without required to create build again. To create this configuration, webpack config has to be changed which is acheived by  the "react-app-rewired" package. It allows to specify all the setting updates in "config-overrides.js" present in the project root.

## Lighthouse Analysis Snapshot
![Lighthouse Analysis Snapshot](https://github.com/Yatin-Gupta/sapient-spacex-app/blob/master/spacex-lighthouse-analysis.PNG)
