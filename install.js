module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://github.com/ArkanDash/Advanced-RVC-Inference.git Advanced-RVC",
      },
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
          params: {
          venv: "env",               
          path: "Advanced-RVC",
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "Advanced-RVC",                // Edit this to customize the path to start the shell from
        message: [
          "pip install --upgrade setuptools",
          "pip install -r ../requirements.txt",
        ]
      }
    }
  ]
}
