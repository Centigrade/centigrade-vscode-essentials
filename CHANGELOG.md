# Change Log

All notable changes to the "centigrade-angular-essentials" extension pack will be documented in this file.

## [0.0.7]

### Added

- Improved karma.conf.js for better Angular testing ([#6])
- _Angular Schematics_ extension to use the CLI from VS code files explorer
- Extension for improved _Sass_ syntax highlighting
- _Night Owl_ theme, _VS Live Share_, _ngrx for Angular 2_, and _Angular Snippets_ as recommended extension
- MIT license info

### Changed

- Only format HTML with _Beautify_ as formatting SCSS conflicts with lint rules or breaks some selectors
- Remove _Angular Inline_ Extension as we would not recommend working with inline templates
- Remove _Angular Files_ as recommended extension in favor for _Angular Schematics_
- Swap _Rainbow Brackets_ with _Bracket Pair Colorizer_ as recommended extension
- Reorder extensions lists in README alphabetically

### Fixed

- Update npm dependencies (fix GitHub issued vulnerabilities)

## [0.0.6]

- Change default print widths from 80 to 100 (Prettier, VS Code ruler)
- Add default .prettierignore to Prettier default config
- Add GitLens to list of recommended extensions
- Remove TS Hero extension. This is no longer needed as VS Code is able to organize imports by itself
- Remove editor rulers from workspace settings as this should be a user setting.

## [0.0.5]

- Reorder changelog

## [0.0.4]

- Publish on GitHub and add repo link

## [0.0.3]

- Fix minor typo in description
- Add link to homepage
- Adjust logo and banner color

## [0.0.2]

- Adjust list of essential extensions
- Add commands to add default configurations
- Detailed README.md

## [0.0.1]

- Initial release

[#6]: https://github.com/Centigrade/centigrade-angular-essentials/issues/6
