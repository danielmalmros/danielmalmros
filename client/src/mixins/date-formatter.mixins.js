export const dateFormatter = {
  methods: {
    formatTimeStamp: createdAt => {
      var event = new Date(createdAt)
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return event.toLocaleDateString('us', options)
    }
  }
}
