import { window } from 'vscode';

const centigradeRecommendedSettings = {
  'todohighlight.keywords': [
    {
      text: 'hint:',
      color: 'white',
      backgroundColor: 'transparent',
      overviewRulerColor: '#999',
    },
    {
      text: 'performance:',
      color: 'rgb(122, 55, 3)',
      backgroundColor: 'rgb(255, 149, 73)',
      border: 'rgb(122, 55, 3)',
    },
    {
      text: 'debug:',
      color: 'yellow',
      backgroundColor: 'transparent',
      border: 'none',
    },
    {
      text: 'deprecated:',
      color: 'orange',
      backgroundColor: 'transparent',
      border: '1px solid orange',
    },
    {
      text: 'fixme:',
      color: 'red',
      border: '1px solid red',
      backgroundColor: 'rgba(0,0,0,.2)',
      overviewRulerColor: '#f07',
    },
    {
      text: 'TODO:',
      color: 'orange',
      border: '1px solid orange',
      backgroundColor: 'rgba(96, 65, 16, 0.55)',
      overviewRulerColor: 'rgb(253, 201, 80)7',
    },
  ],
  'todohighlight.defaultStyle': {
    color: 'black',
    backgroundColor: '#ffab00',
    overviewRulerColor: '#ffab00',
    cursor: 'pointer',
    border: '1px solid #eee',
    isWholeLine: false,
  },
};

export async function setRecommendedTodoHighlightSettings() {
  await window.showInputBox({
    title: 'Hey!',
  });
}
