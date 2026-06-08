module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
       message: [
        "uv pip uninstall diffusers",
        "uv pip install -r requirements.txt",
        // "uv pip install hf_xet"  // stalls model downloads for me.  delete the 1st '//' to install on update
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        venv: "env",
        path: "app",
      }
    }
  }, {
    method: "shell.run",
    params: {
      path: "app/ui",
      message: [
        "npm install",
        "npm run update_db",
        "npm run build"
      ],
      on: [{
        event: "/error:/i",
        break: false
      }]
    }
  }]
}
