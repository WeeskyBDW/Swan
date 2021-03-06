import Command from '../../components/Command';
import { discordError } from '../../components/Messages';

const math = require('mathjs');

const parser = math.parser();

class Math extends Command {
  constructor() {
    super('Mathematiques');
    this.aliases = ['math', 'mathematique', 'mathematiques', 'mathématique', 'mathématiques'];
    this.usage = 'math <expression mathématique de skript>';
    this.examples = ['math sqrt(12) + 18 - abs(-13)'];
  }

  async execute(message, args) {
    if (args.length === 0) return message.channel.send(discordError(this.config.addMath, message));

    let expr = args.join(' ');
    expr = expr
      .replace(/log\((\d+)\)/gimu, 'log($1, 10)') // on précise la base si pas précisée car base par défaut du parser : e, base par défaut de skript : 10
      .replace(/ceiling\(/gimu, 'ceil(')
      // skript-math :
      .replace(/factorial\((\d+)\)/gimu, '!$1')
      .replace(/gamma\(/gimu, 'math.gamma(');

    try {
      expr = parser.evaluate(expr);
    } catch (err) {
      return discordError(this.config.error, message);
    }
    return message.reply(`\`${args.join(' ')}\` = \`${expr}\``);
  }
}

export default Math;
