'use strict';

const path = require('path');
const Command = require('./lib/command');
// 继承自lib/command.js
class EggScripts extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.usage = 'Usage: egg-scripts [command] [options]';
    // 注册lib/cmd下所有命令
    // load directory
    this.load(path.join(__dirname, 'lib/cmd'));
  }
}

module.exports = exports = EggScripts;
exports.Command = Command;
exports.StartCommand = require('./lib/cmd/start');
exports.StopCommand = require('./lib/cmd/stop');
