/* eslint-disable import/no-cycle */
import { MessageEmbed } from 'discord.js';
import { config } from '../main';
import { padNumber } from '../utils';

export function success(msg) {
  console.log(`[SkriptMc Bot] (${padNumber(new Date(Date.now()).getHours())}:${padNumber(new Date(Date.now()).getMinutes())}) ✔️  ${msg}`);
}
export function error(msg) {
  console.log(`[SkriptMc Bot] (${padNumber(new Date(Date.now()).getHours())}:${padNumber(new Date(Date.now()).getMinutes())}) ✖️  ${msg}`);
}

export function discordSuccess(description, message) {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/459996868852711434/570570402615525387/ok.png')
    .setTitle('Succès')
    .setColor(config.colors.success)
    .setDescription(description)
    .setTimestamp()
    .setFooter(`Exécuté par ${message.author.username}`);
  return embed;
}

export function discordInfo(description, message) {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/459996868852711434/570569077173649438/info_png_704336.png')
    .setTitle('Information')
    .setColor(config.colors.default)
    .setDescription(description)
    .setTimestamp()
    .setFooter(`Exécuté par ${message.author.username}`);
  return embed;
}

export function discordWarning(description, message) {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/533791418259341315/570722475772608519/warning-icon-md-png-4.png')
    .setTitle('Avertissement')
    .setColor(config.colors.warning)
    .setDescription(description)
    .setTimestamp()
    .setFooter(`Exécuté par ${message.author.username}`);
  return embed;
}

export function discordError(description, message) {
  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail('https://cdn.discordapp.com/attachments/459996868852711434/570565753044992000/error-icon-4.png')
    .setTitle('Erreur')
    .setColor(config.colors.error)
    .setDescription(description)
    .setTimestamp()
    .setFooter(`Exécuté par ${message.author.username}`);
  return embed;
}
