function getFilesToBackup(lastBackup, changes) {
  return [... new Set(changes
    .filter(item => item[1] > lastBackup)
    .map(item => item[0])
    .sort((a, b) => a - b)
  )]
}