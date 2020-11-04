import { Configuration } from './configuration';

export const Prettier = new Configuration('prettier', ['.prettierrc', '.prettierignore']);
export const VsCodeSettings = new Configuration('vscode', ['settings.json']);
export const VsCodeExtensionRecommendations = new Configuration('vscode', ['extensions.json']);
export const EditorConfig = new Configuration('editorconfig', ['.editorconfig']);
export const KarmaConfig = new Configuration('karma', ['karma.conf.js']);
