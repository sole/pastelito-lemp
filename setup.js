var fs = require('fs');
var shelljs = require('shelljs');

var mysqlRootPass = 'whatever';

var installTemplate = fs.readFileSync('./data/install-template.sh', 'utf-8');
installTemplate = installTemplate.replace('your_password', mysqlRootPass);

var lines = installTemplate.split('\n');
lines.forEach((line) => {
	shelljs.exec(line);
});
