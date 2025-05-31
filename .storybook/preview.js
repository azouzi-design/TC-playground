import '../src/index.css';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // Optional: Add global decorators if needed
  // decorators: [
  //   (Story) => (
  //     <div className="p-4">
  //       <Story />
  //     </div>
  //   ),
  // ],
};