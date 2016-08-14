'use strict';

import fs from 'fs';

const tasks = fs.readdirSync('./gulp/tasks');

//Dynamically builds gulp file
//Can easily add and remove individual tasks from tasks folder

tasks.forEach((task) => {
  require('./tasks/' + task);
});