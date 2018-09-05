export default {
  name: 'z-sample',
  props: {
    message: {
      type: String,
      default: 'Hello Chameleon',
    },
  },
  render(createElement) {
    return createElement(
      'div',
      this.message,
    );
  },
};
