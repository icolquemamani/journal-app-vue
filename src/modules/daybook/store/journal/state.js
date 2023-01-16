export default () => ({
  isLoading: false,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      picture: null,
    }
  ],
})