module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git fetch --all",
        "git reset --hard origin/master"
      ],
    }
  }, {
    method: "shell.run",
    params: {
      path: "Advanced-RVC",
      message: [
        "git fetch --all",
        "git reset --hard origin/master"
      ],
    }
  }]
}
