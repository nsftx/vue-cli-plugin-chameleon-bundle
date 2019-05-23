import {
  elementable,
  reactionable,
  themable,
} from '../../mixins';

export default {
  name: '<%= bundleNamespace %>-sample',
  mixins: [
    elementable,
    reactionable,
    themable,
  ],
  render(createElement) {
    /*
      this.config - Local copy of definition object (elementable mixin)
      < <%= bundleNamespace %>-sample :definition="config" />
      config: {
        message: 'Hello Chameleon',
        theme: 'dark',
        color: 'green accent-4',
      },
    */
    return createElement(
      'div',
      {
        props: {
          // Color - Definition object color
          color: this.config.color,
          // Theme - Definition object theme (themable mixin)
          dark: this.isThemeDark,
          light: this.isThemeLight,
        },
        // Generates data attributes needed for chameleon builder (elementable mixin)
        attrs: this.getSchemaAttributes(),

        // Static classes needed for chameleon builder.
        // This is required for all elements used in builder (elementable mixin).
        staticClass: `${this.baseClass} ${this.$options.name}`,
        // Make it prettier
        staticStyle: {
          textAlign: 'center',
          padding: '20px',

        },
      },
      // Message - Definition object message
      this.config.message,
    );
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
