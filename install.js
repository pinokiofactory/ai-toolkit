module.exports = {
  run: [
    // nvidia GPU support only
    {
     when: "{{gpu !== 'nvidia'}}",
     method: "notify",
     params: {
       html: "This app requires an NVIDIA GPU."
     }, 
      next: null
    },

    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/BuffaloBuffaloBuffaloBuffalo/ai-toolkit-perceptual.git app",
        ]
      }
    },

    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
        }
      }
    },

    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
          // "uv pip install hf_xet"  // stalls model downloads for me.  delete the 1st '//' to install on update
        ]
      }
    },
  ]
}

