# Centigrade Angular Essentials

This extension not only adds Visual Studio Code extensions that are essential for all [Centigrade](https://www.centigrade.de) colleagues developing Angular applications. It also provides a set of default configurations in order to auto-format your TypeScript, HTML, and (S)CSS code while adhering to common standards like the official [Angular Styleguide](https://angular.io/guide/styleguide) or the [Stylint Standard Configuration](https://github.com/stylelint/stylelint-config-standard).

## Essential VS Code Extensions

The following essential VS code extensions will be installed. Each of this extensions plays a particular role in our development process.

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template): Intellisense for Angular templates
- [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics): Angular CLI Schematics integrated into files explorer.
- [Auto-Rename-Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Rename closing HTML tags when opening HTML tags are renamed
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify): Auto-format HTML
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Debugging Angular applications with Chrome
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): Set default format configurations for any editor
- [json2ts](https://marketplace.visualstudio.com/items?itemName=GregorBiswanger.json2ts): Paste json into TypeScript classes
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Intellisense for TypeScript imports
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Auto-format TypeScript
- [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented): Improved syntax highlighting for (S)CSS and SASS
- [SCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss): Intellisense for (S)CSS
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint): Linting (S)CSS
- [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): Lint TypeScript
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): Inspect and update versions in package.json

## Default Configurations Snippets

This extension comes with a set of default configurations for the essential extensions listed above. They can be added via the explorer's context menu to your workspace.

Add to project root:

- Beautify (`.jsbeautifyrc`)
- EditorConfig (`.editorconfig`)
- Prettier (`.prettierrc`, `.prettierignore`)
- StyleLint (`.stylelintrc`)
- Karma (`karma.conf.js`)

Add to sub-folder `.vscode/*`:

- VS Code Settings (`settings.json`)

Install the following dev dependencies:

- `npm install --save-dev stylelint-config-standard`
- `npm install --save-dev karma-spec-reporter`

## Recommended VD Code Extensions

You can install some of the following Visual Studio Code extensions that we really like and recommend. These are not essential but could be helpful:

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Nice icon set for VS Code (doesn't force VS code restart, in contrast to vs-code-icons)
- [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme): Nice theme with a lot configurations
- [Night Owl Theme](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl): Nice dark theme that works well with _Dank Mono_ font.
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer): Highlight corresponding brackets in the same color
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): Highlight TODO and FIXME comments
- [GitLab-CI templates generator](https://marketplace.visualstudio.com/items?itemName=jgsqware.gitlab-ci-templates): Templates and syntax highlighting for gitlab configuration files
- [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker): Docker syntax highlighting
- [Goto last edit location](https://marketplace.visualstudio.com/items?itemName=krizzdewizz.goto-last-edit-location): Go to the last edit location (even across files)
- [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc): Table of content for Markdown
- [Mardown Paste](https://marketplace.visualstudio.com/items?itemName=telesoho.vscode-markdown-paste-image): Handy tool to quickly insert screencaptures into markdown
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager): Switch between projects in VS Code
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Git tooling inside of VS Code
- [ngrx for Angular 2 Snippets](https://marketplace.visualstudio.com/items?itemName=ahsanayaz.vscode-ngrx-snippets): NgRx snippets to reduce boiler plate writing
- [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Live share feature for collaborative code editing.
- [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2): Generic Angular snippets for typical coding patterns.

## FAQ

### StyleLint Error in VS Code

**Q**: After using StyleLint with default config the following error _stylelint: Could not find "stylelint-config-standard". Do you need a `configBasedir`_ appears. What can I do?

**A**: Run `npm install --save-dev stylelint-config-standard` which installs standard configuration for StyleLint where our StyleLint config is based on.

### Update Karma dependencies

**Q**: Using the given `karma.conf.js` does report an error.

**A**: You have to update the current Karma dependencies by running `npm install --save-dev karma-spec-reporter` and `npm uninstall --save-dev karma-junit-reporter`
