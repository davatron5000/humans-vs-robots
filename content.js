document.querySelectorAll('.Box-row .js-navigation-open').forEach( (item) => {
  const filename = item.textContent.toLowerCase();
  const humanFiles = ['AUTHORS', 'CHANGELOG', 'CODE_OF_CONDUCT', 'CONTRIBUTING', 'FAQ', 'LICENSE', 'README', 'TECHNOLOGY', 'TROUBLESHOOTING', 'SECURITY'];
  const row = item.parentNode.parentNode.parentNode;
  if((filename != 'src' && filename.endsWith('rc') && !filename.endsWith('src'))
    || filename.includes('config')
    || filename.includes('ignore')
    || filename.includes('.conf.js')
    || filename.includes('webpack')
    || filename == 'robots.txt'
    || filename == 'sitemap.xml'
    || filename == 'cname'
    || filename == 'CNAME'
    || filename == 'craft'
    || filename.endsWith('.toml')
    || filename.endsWith('.json')
    || filename.endsWith('.json5')
    || filename.endsWith('.yml')
    || filename.endsWith('.yaml')
    || filename.endsWith('.lock')
    || filename.endsWith('-lock.json')
    || filename.endsWith('.bazel')
    || filename.endsWith('gemfile')
    || filename.endsWith('file')
    || filename.startsWith('Jenkinsfile')
    || filename.startsWith('gruntfile')
    || filename.startsWith('gulpfile')
    || filename.startsWith('.')
  ){
    row.style.background = '#fee9e8'
  } else if(humanFiles.includes(item.textContent.split('-')[0].split('.')[0])) {
    row.style.background = '#edf6fd'
  }
})
