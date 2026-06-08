module.exports = {
  requires: {
    bundle: "ai",
  },
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "../env",
        env: {
          PYTHONUTF8: "1",
          HF_HUB_ENABLE_HF_TRANSFER: "0"
         },
        path: "app/ui",
        message: [
          "npm run start",
        ],
        on: [{
          "event": "/http:\/\/\\S+/",
          "done": true
        }]
      }
    },
    {
      method: "local.set",
      params: {
        url: "http://localhost:8675"
      }
    }
  ]
}
