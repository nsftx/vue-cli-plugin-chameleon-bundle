export default {
  group: 'widgets',
  type: '<%= bundleNamespace %>-sample',
  name: 'Sample',
  icon: 'card_giftcard',
  actions: [
    {
      name: 'loadData',
      help: 'Load element data',
    },
  ],
  events: [
    {
      name: 'Loaded',
      help: 'Element data was loaded',
    },
  ],
  options: {
    message: {
      type: 'input',
      name: 'Message Text',
      value: 'Hello <%= bundleName %>',
      priority: 1,
    },
    theme: {
      group: 'style',
      value: null,
    },
    color: {
      type: 'colorPicker',
      group: 'style',
      value: null,
    },
  },
};
