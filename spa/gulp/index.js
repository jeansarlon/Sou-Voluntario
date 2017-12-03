'use strict';

var gulp = require('gulp'),
fs       = require('fs'),
tasks    = fs.readdirSync('./gulp/tasks/'),
path     = require('path');

tasks.forEach(function(task) {
	if (task != '.DS_Store' & task != '._.DS_Store') {
		require(path.join(__dirname, 'tasks', task));
	}
});

require('events').EventEmitter.prototype._maxListeners = 100;
// gulp.task('connect:before', ['watch']);
