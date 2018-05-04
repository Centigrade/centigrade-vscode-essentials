# Centigrade Angular Essentials

This extension not only adds Visual Studio Code extensions that are essential for all [Centigrade](https://www.centigrade.de) colleagues developing Angular applications. It also provides a set of default configurations in order to auto-format your TypeScript, HTML, and (S)CSS code while adhering to common standards like the official [Angular Styleguide](https://angular.io/guide/styleguide) or the [Stylint Standard Configuration](https://github.com/stylelint/stylelint-config-standard).

## Essential VS Code Extensions

The following essential VS code extensions will be installed. Each of this extensions plays a particular role in our development process.

* [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template): Intellisense for Angular templates
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Intellisense for TypeScript imports
* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): Set default format configurations for any editor
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): Lint TypeScript
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Auto-format TypeScript
* [Auto-Rename-Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): Rename closing HTML tags when opening HTML tags are renamed
* [json2ts](https://marketplace.visualstudio.com/items?itemName=GregorBiswanger.json2ts): Paste json into TypeScript classes
* [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify): Auto-format HTML
* [SCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss): Intellisense for (S)CSS
* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Debugging Angular applications with Chrome
* [Angular2 Inline](https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline): Syntax highlight inline Angular templates
* [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): Inspect and update versions in package.json
* [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint): Linting (S)CSS

## Default Configurations Snippets

This extension comes with a set of default configurations for the essential extensions listed above. They can be added via the explorer's context menu to your workspace.

Add to project root:

* Beautify (`.jsbeautifyrc`)
* EditorConfig (`.editorconfig`)
* Prettier (`.prettierrc`, `.prettierignore`)
* StyleLint (`.stylelintrc`)

Add to sub-folder `.vscode/*`:

* VS Code Settings (`settings.json`)

## Recommended VD Code Extensions

You can install some of the following Visual Studio Code extensions that we really like and recommend. These are not essential but could be helpful:

* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Nice icon set for VS Code (doesn't force VS code restart, in contrast to vs-code-icons)
* [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme): Nice theme with a lot configurations
* [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets): Highlight corresponding brackets in the same color
* [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): Highlight TODO and FIXME comments
* [GitLab-CI templates generator](https://marketplace.visualstudio.com/items?itemName=jgsqware.gitlab-ci-templates): Templates and syntax highlighting for gitlab configuration files
* [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker): Docker syntax highlighting
* [Goto last edit location](https://marketplace.visualstudio.com/items?itemName=krizzdewizz.goto-last-edit-location): Go to the last edit location (even across files)
* [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc): Table of content for Markdown
* [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager): Switch between projects in VS Code
* [Angular Files](https://marketplace.visualstudio.com/items?itemName=alexiv.vscode-angular2-files): Quickly scaffold Angular file templates
* [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Git tooling inside of VS Code

## FAQ

### StyleLint Error in VS Code

**Q**: After using StyleLint with default config the following error _stylelint: Could not find "stylelint-config-standard". Do you need a `configBasedir`_ appears. What can I do?

**A**: Run `npm install --save-dev stylelint-config-standard` which installs standard configuration for StyleLint where our StyleLint config is based on.
