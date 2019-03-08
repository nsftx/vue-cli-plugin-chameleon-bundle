import {
  reactionable,
  themeable,
} from '@mixins';

export default {
  name: 'z-sample',
  mixins: [
    reactionable,
    themeable,
  ],
  props: {
    message: {
      type: String,
      default: 'Hello Chameleon',
    },
  },
  render(createElement) {
    return createElement(
      'div',
      {
        props: {
          color: this.config.color,
          dark: this.isThemeDark,
          light: this.isThemeLight,
        },
      },
      this.message,
    );
  },
  methods: {
    loadData() {
      const message = 'Hello again, Chameleon';
      this.sendToEventBus('Loaded', message);
      return message;
    },
  },
};
