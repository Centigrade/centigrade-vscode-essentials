import { Configuration } from './configuration';

export const Prettier = new Configuration('prettier', '.prettierrc');
export const VsCodeSettings = new Configuration('vscode', 'settings.json');
export const Beautify = new Configuration('beautify', '.jsbeautifyrc');
export const Stylelint = new Configuration('stylelint', '.stylelintrc');
export const EditorConfig = new Configuration('editorconfig', '.editorconfig');
