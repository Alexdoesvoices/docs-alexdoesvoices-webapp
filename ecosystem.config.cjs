module.exports = {
  apps: [
    {
      name: 'docs-alexdoesvoices-webapp',
      script: 'bun',
      // We removed '-s' and added '--dotfiles' just in case. 
      // We use the absolute path to the dist folder.
      args: 'x serve -l 7090 /home/arobinson/dev/projects/docs-alexdoesvoices-webapp/dist',
      cwd: '/home/arobinson/dev/projects/docs-alexdoesvoices-webapp',
      env: {
        NODE_ENV: 'production'
      }
    }
  ] 
}