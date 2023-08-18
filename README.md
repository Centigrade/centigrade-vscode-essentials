# Centigrade Angular Essentials

This extension not only adds Visual Studio Code extensions that are essential for all [Centigrade](https://www.centigrade.de) colleagues developing Angular applications. It also provides a set of default configurations in order to auto-format your TypeScript, HTML, and (S)CSS code while adhering to common standards like the official [Angular Styleguide](https://angular.io/guide/styleguide).

## Essential VS Code Extensions

The following essential VS code extensions will be installed. Each of this extensions plays a particular role in our development process.

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template): Intellisense for Angular templates
- [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics): Angular CLI Schematics integrated into files explorer
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): Set default format configurations for any editor
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Intellisense for TypeScript imports
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Auto-format TypeScript
- [SCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss): Intellisense for (S)CSS
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin): Lint TypeScript
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Lint TypeScript
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): Inspect and update versions in package.json
- [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Live share feature for collaborative code editing
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): Spelling checker for source code

## Default Configurations Snippets

This extension comes with a set of default configurations for the essential extensions listed above. They can be added via the explorer's context menu to your workspace.

Add to project root:

- EditorConfig (`.editorconfig`)
- Prettier (`.prettierrc`, `.prettierignore`)
- Karma (`karma.conf.js`)
- TSConfig (`tsconfig.json`)

Add to sub-folder `.vscode/*`:

- VS Code Settings (`settings.json`, `extensions.json`)

Install the following dev dependencies:

- `npm install --save-dev karma-spec-reporter`

## Recommended VS Code Extensions

You can install some of the following Visual Studio Code extensions that we really like and recommend. These are not essential but could be helpful:

- [Angular Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console): Comfortable UI for the Angular CLI
- [Angular Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2): Generic Angular snippets for typical coding patterns
- [Code Spell Checker German](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-german): German Spell Checker extension
- [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker): Docker syntax highlighting
- [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio): Unofficial extension integrates Draw.io into VS Code.
- [GitLab-CI templates generator](https://marketplace.visualstudio.com/items?itemName=jgsqware.gitlab-ci-templates): Templates and syntax highlighting for gitlab configuration files
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): Supercharge Git within VS Code
- [Mardown Paste](https://marketplace.visualstudio.com/items?itemName=telesoho.vscode-markdown-paste-image): Handy tool to quickly insert screencaptures into markdown
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Nice icon set for VS Code (doesn't force VS code restart, in contrast to vs-code-icons)
- [Material Theme](https://marketplace.visualstudio.com/items?itemName=Equinusocio.vsc-material-theme): Nice theme with a lot configurations
- [ngrx for Angular 2 Snippets](https://marketplace.visualstudio.com/items?itemName=ahsanayaz.vscode-ngrx-snippets): NgRx snippets to reduce boiler plate writing
- [Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock): Change the coloring of VS code depending of your workspace.
- [Polacode](https://marketplace.visualstudio.com/items?itemName=pnp.polacode): Handy tool to create code snippet shots for presentation purposes
- [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager): Switch between projects in VS Code
- [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight): Highlight TODO and FIXME comments

## FAQ

### Update Karma dependencies

**Q**: Using the given `karma.conf.js` does report an error.

**A**: You have to update the current Karma dependencies by running `npm install --save-dev karma-spec-reporter` and `npm uninstall --save-dev karma-junit-reporter`
