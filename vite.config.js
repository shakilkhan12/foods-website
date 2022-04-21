const path = require("path")
module.exports = {
    build: {
        rollupOptions: {
          input: {
            'entry-point-a': path.resolve(__dirname, 'src/index.html'),
          },
        }
      },
}