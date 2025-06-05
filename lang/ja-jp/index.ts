import beta from './beta';
import chat from './chat';
import editorSetting from './editor-setting';
import general from './general';
import indexing from './indexing';
import model from './model';
import network from './network';
import rule from './rule';
import side from './side';
import tab from './tab';

export const LOCALE = 'ja-jp';

export default {
  LOCALE,
  REPLACEMENTS: [
    ...side,
    ...general,
    ...chat,
    ...tab,
    ...model,
    ...rule,
    ...indexing,
    ...network,
    ...beta,
    ...editorSetting,
  ],
};
