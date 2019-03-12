import {
  elementable,
  reactionable,
  themable,
} from '../../mixins';

export default {
  name: 'z-sample',
  mixins: [
    elementable,
    reactionable,
    themable,
  ],
  render(createElement) {
    /*
      this.config - Local copy of definition object (elementable mixin)
      <z-sample :definition="config" />
      config: {
        message: 'Hello Chameleon',
        theme: 'dark',
        color: 'green accent-4',
      },
    */
    return createElement(
      'v-card',
      {
        props: {
          // Color - Definition object color
          color: this.config.color,
          // Theme - Definition object theme (themable mixin)
          dark: this.isThemeDark,
          light: this.isThemeLight,
        },
      },
      // Message - Definition object message
      this.config.message,
    );
  },
  created() {
    setTimeout(() => {
      this.loadData();
    }, 2000);
  },
  methods: {
    // Actions - Method that can be used for EAR system (reactionable mixin)
    loadData() {
      this.config.message = 'Hello again, Chameleon';
      // Events - Send event using eventBus (reactionable mixin)
      this.sendToEventBus('Loaded', this.config.message);
    },
  },
};
