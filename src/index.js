const path = require('path');
const fs = require('fs');

const modules_dir = path.join(__dirname, 'commands');
const modules_arr = fs.readdirSync(modules_dir);

let my_modules = [];

modules_arr.forEach(elem => {
	my_modules.push(require(`./commands/${elem}`));
});

module.exports = my_modules;