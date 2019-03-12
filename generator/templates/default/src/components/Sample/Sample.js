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
    return createElement(
      'v-card',
      {
        props: {
          // <z-sample :definition="config" />
          // Local copy of definition object (elementable mixin)
          color: this.config.color,
          // Element theme (themable mixin)
          dark: this.isThemeDark,
          light: this.isThemeLight,
        },
      },
      this.config.message,
    );
  },
  created() {
    setTimeout(() => {
      this.loadData();
    }, 2000);
  },
  methods: {
    // Method (action) used for EAR system
    loadData() {
      this.config.message = 'Hello again, Chameleon';
      // Send event using eventBus (reactionable mixin)
      this.sendToEventBus('Loaded', this.config.message);
    },
  },
};
