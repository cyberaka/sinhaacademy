'use client';

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import styles from '@/styles/Components/Container/Svar.module.scss';

const initialSwaraMap = [
  { name: 'क', audioUrl: '/assets/mp3/barakhari/क.mp3', active: false },
  { name: 'का', audioUrl: '/assets/mp3/barakhari/का.mp3', active: false },
  { name: 'कि', audioUrl: '/assets/mp3/barakhari/कि.mp3', active: false },
  { name: 'की', audioUrl: '/assets/mp3/barakhari/की.mp3', active: false },
  { name: 'कु', audioUrl: '/assets/mp3/barakhari/कु.mp3', active: false },
  { name: 'कू', audioUrl: '/assets/mp3/barakhari/कू.mp3', active: false },
  { name: 'के', audioUrl: '/assets/mp3/barakhari/के.mp3', active: false },
  { name: 'कै', audioUrl: '/assets/mp3/barakhari/कै.mp3', active: false },
  { name: 'को', audioUrl: '/assets/mp3/barakhari/को.mp3', active: false },
  { name: 'कौ', audioUrl: '/assets/mp3/barakhari/कौ.mp3', active: false },
  { name: 'कं', audioUrl: '/assets/mp3/barakhari/कं.mp3', active: false },
  { name: 'कः', audioUrl: '/assets/mp3/barakhari/कः.mp3', active: false },
  { name: 'कृ', audioUrl: '/assets/mp3/barakhari/कृ.mp3', active: false },
  { name: 'कँ', audioUrl: '/assets/mp3/barakhari/कँ.mp3', active: false },
  { name: 'ख', audioUrl: '/assets/mp3/barakhari/ख.mp3', active: false },
  { name: 'खा', audioUrl: '/assets/mp3/barakhari/खा.mp3', active: false },
  { name: 'खि', audioUrl: '/assets/mp3/barakhari/खि.mp3', active: false },
  { name: 'खी', audioUrl: '/assets/mp3/barakhari/खी.mp3', active: false },
  { name: 'खु', audioUrl: '/assets/mp3/barakhari/खु.mp3', active: false },
  { name: 'खू', audioUrl: '/assets/mp3/barakhari/खू.mp3', active: false },
  { name: 'खे', audioUrl: '/assets/mp3/barakhari/खे.mp3', active: false },
  { name: 'खै', audioUrl: '/assets/mp3/barakhari/खै.mp3', active: false },
  { name: 'खो', audioUrl: '/assets/mp3/barakhari/खो.mp3', active: false },
  { name: 'खौ', audioUrl: '/assets/mp3/barakhari/खौ.mp3', active: false },
  { name: 'खं', audioUrl: '/assets/mp3/barakhari/खं.mp3', active: false },
  { name: 'खः', audioUrl: '/assets/mp3/barakhari/खः.mp3', active: false },
  { name: 'खृ', audioUrl: '/assets/mp3/barakhari/खृ.mp3', active: false },
  { name: 'खँ', audioUrl: '/assets/mp3/barakhari/खँ.mp3', active: false },
  { name: 'ग', audioUrl: '/assets/mp3/barakhari/ग.mp3', active: false },
  { name: 'गा', audioUrl: '/assets/mp3/barakhari/गा.mp3', active: false },
  { name: 'गि', audioUrl: '/assets/mp3/barakhari/गि.mp3', active: false },
  { name: 'गी', audioUrl: '/assets/mp3/barakhari/गी.mp3', active: false },
  { name: 'गु', audioUrl: '/assets/mp3/barakhari/गु.mp3', active: false },
  { name: 'गू', audioUrl: '/assets/mp3/barakhari/गू.mp3', active: false },
  { name: 'गे', audioUrl: '/assets/mp3/barakhari/गे.mp3', active: false },
  { name: 'गै', audioUrl: '/assets/mp3/barakhari/गै.mp3', active: false },
  { name: 'गो', audioUrl: '/assets/mp3/barakhari/गो.mp3', active: false },
  { name: 'गौ', audioUrl: '/assets/mp3/barakhari/गौ.mp3', active: false },
  { name: 'गं', audioUrl: '/assets/mp3/barakhari/गं.mp3', active: false },
  { name: 'गः', audioUrl: '/assets/mp3/barakhari/गः.mp3', active: false },
  { name: 'गृ', audioUrl: '/assets/mp3/barakhari/गृ.mp3', active: false },
  { name: 'गँ', audioUrl: '/assets/mp3/barakhari/गँ.mp3', active: false },
  { name: 'घ', audioUrl: '/assets/mp3/barakhari/घ.mp3', active: false },
  { name: 'घा', audioUrl: '/assets/mp3/barakhari/घा.mp3', active: false },
  { name: 'घि', audioUrl: '/assets/mp3/barakhari/घि.mp3', active: false },
  { name: 'घी', audioUrl: '/assets/mp3/barakhari/घी.mp3', active: false },
  { name: 'घु', audioUrl: '/assets/mp3/barakhari/घु.mp3', active: false },
  { name: 'घू', audioUrl: '/assets/mp3/barakhari/घू.mp3', active: false },
  { name: 'घे', audioUrl: '/assets/mp3/barakhari/घे.mp3', active: false },
  { name: 'घै', audioUrl: '/assets/mp3/barakhari/घै.mp3', active: false },
  { name: 'घो', audioUrl: '/assets/mp3/barakhari/घो.mp3', active: false },
  { name: 'घौ', audioUrl: '/assets/mp3/barakhari/घौ.mp3', active: false },
  { name: 'घं', audioUrl: '/assets/mp3/barakhari/घं.mp3', active: false },
  { name: 'घः', audioUrl: '/assets/mp3/barakhari/घः.mp3', active: false },
  { name: 'घृ', audioUrl: '/assets/mp3/barakhari/घृ.mp3', active: false },
  { name: 'घँ', audioUrl: '/assets/mp3/barakhari/घँ.mp3', active: false },
  { name: 'ङ', audioUrl: '/assets/mp3/barakhari/ङ.mp3', active: false },
  { name: 'ङा', audioUrl: '/assets/mp3/barakhari/ङा.mp3', active: false },
  { name: 'ङि', audioUrl: '/assets/mp3/barakhari/ङि.mp3', active: false },
  { name: 'ङी', audioUrl: '/assets/mp3/barakhari/ङी.mp3', active: false },
  { name: 'ङु', audioUrl: '/assets/mp3/barakhari/ङु.mp3', active: false },
  { name: 'ङू', audioUrl: '/assets/mp3/barakhari/ङू.mp3', active: false },
  { name: 'ङे', audioUrl: '/assets/mp3/barakhari/ङे.mp3', active: false },
  { name: 'ङै', audioUrl: '/assets/mp3/barakhari/ङै.mp3', active: false },
  { name: 'ङृ', audioUrl: '/assets/mp3/barakhari/ङृ.mp3', active: false },
  { name: 'ङँ', audioUrl: '/assets/mp3/barakhari/ङँ.mp3', active: false },
  { name: 'च', audioUrl: '/assets/mp3/barakhari/च.mp3', active: false },
  { name: 'चा', audioUrl: '/assets/mp3/barakhari/चा.mp3', active: false },
  { name: 'चि', audioUrl: '/assets/mp3/barakhari/चि.mp3', active: false },
  { name: 'ची', audioUrl: '/assets/mp3/barakhari/ची.mp3', active: false },
  { name: 'चु', audioUrl: '/assets/mp3/barakhari/चु.mp3', active: false },
  { name: 'चू', audioUrl: '/assets/mp3/barakhari/चू.mp3', active: false },
  { name: 'चे', audioUrl: '/assets/mp3/barakhari/चे.mp3', active: false },
  { name: 'चै', audioUrl: '/assets/mp3/barakhari/चै.mp3', active: false },
  { name: 'चो', audioUrl: '/assets/mp3/barakhari/चो.mp3', active: false },
  { name: 'चौ', audioUrl: '/assets/mp3/barakhari/चौ.mp3', active: false },
  { name: 'चं', audioUrl: '/assets/mp3/barakhari/चं.mp3', active: false },
  { name: 'चः', audioUrl: '/assets/mp3/barakhari/चः.mp3', active: false },
  { name: 'चृ', audioUrl: '/assets/mp3/barakhari/चृ.mp3', active: false },
  { name: 'चँ', audioUrl: '/assets/mp3/barakhari/चँ.mp3', active: false },
  { name: 'छ', audioUrl: '/assets/mp3/barakhari/छ.mp3', active: false },
  { name: 'छा', audioUrl: '/assets/mp3/barakhari/छा.mp3', active: false },
  { name: 'छि', audioUrl: '/assets/mp3/barakhari/छि.mp3', active: false },
  { name: 'छी', audioUrl: '/assets/mp3/barakhari/छी.mp3', active: false },
  { name: 'छु', audioUrl: '/assets/mp3/barakhari/छु.mp3', active: false },
  { name: 'छू', audioUrl: '/assets/mp3/barakhari/छू.mp3', active: false },
  { name: 'छे', audioUrl: '/assets/mp3/barakhari/छे.mp3', active: false },
  { name: 'छै', audioUrl: '/assets/mp3/barakhari/छै.mp3', active: false },
  { name: 'छो', audioUrl: '/assets/mp3/barakhari/छो.mp3', active: false },
  { name: 'छौ', audioUrl: '/assets/mp3/barakhari/छौ.mp3', active: false },
  { name: 'छं', audioUrl: '/assets/mp3/barakhari/छं.mp3', active: false },
  { name: 'छः', audioUrl: '/assets/mp3/barakhari/छः.mp3', active: false },
  { name: 'छृ', audioUrl: '/assets/mp3/barakhari/छृ.mp3', active: false },
  { name: 'छँ', audioUrl: '/assets/mp3/barakhari/छँ.mp3', active: false },
  { name: 'ज', audioUrl: '/assets/mp3/barakhari/ज.mp3', active: false },
  { name: 'जा', audioUrl: '/assets/mp3/barakhari/जा.mp3', active: false },
  { name: 'जि', audioUrl: '/assets/mp3/barakhari/जि.mp3', active: false },
  { name: 'जी', audioUrl: '/assets/mp3/barakhari/जी.mp3', active: false },
  { name: 'जु', audioUrl: '/assets/mp3/barakhari/जु.mp3', active: false },
  { name: 'जू', audioUrl: '/assets/mp3/barakhari/जू.mp3', active: false },
  { name: 'जे', audioUrl: '/assets/mp3/barakhari/जे.mp3', active: false },
  { name: 'जै', audioUrl: '/assets/mp3/barakhari/जै.mp3', active: false },
  { name: 'जो', audioUrl: '/assets/mp3/barakhari/जो.mp3', active: false },
  { name: 'जौ', audioUrl: '/assets/mp3/barakhari/जौ.mp3', active: false },
  { name: 'जं', audioUrl: '/assets/mp3/barakhari/जं.mp3', active: false },
  { name: 'जः', audioUrl: '/assets/mp3/barakhari/जः.mp3', active: false },
  { name: 'जृ', audioUrl: '/assets/mp3/barakhari/जृ.mp3', active: false },
  { name: 'जँ', audioUrl: '/assets/mp3/barakhari/जँ.mp3', active: false },
  { name: 'झ', audioUrl: '/assets/mp3/barakhari/झ.mp3', active: false },
  { name: 'झा', audioUrl: '/assets/mp3/barakhari/झा.mp3', active: false },
  { name: 'झि', audioUrl: '/assets/mp3/barakhari/झि.mp3', active: false },
  { name: 'झी', audioUrl: '/assets/mp3/barakhari/झी.mp3', active: false },
  { name: 'झु', audioUrl: '/assets/mp3/barakhari/झु.mp3', active: false },
  { name: 'झू', audioUrl: '/assets/mp3/barakhari/झू.mp3', active: false },
  { name: 'झे', audioUrl: '/assets/mp3/barakhari/झे.mp3', active: false },
  { name: 'झै', audioUrl: '/assets/mp3/barakhari/झै.mp3', active: false },
  { name: 'झो', audioUrl: '/assets/mp3/barakhari/झो.mp3', active: false },
  { name: 'झौ', audioUrl: '/assets/mp3/barakhari/झौ.mp3', active: false },
  { name: 'झं', audioUrl: '/assets/mp3/barakhari/झं.mp3', active: false },
  { name: 'झः', audioUrl: '/assets/mp3/barakhari/झः.mp3', active: false },
  { name: 'झृ', audioUrl: '/assets/mp3/barakhari/झृ.mp3', active: false },
  { name: 'झँ', audioUrl: '/assets/mp3/barakhari/झँ.mp3', active: false },
  { name: 'ञ', audioUrl: '/assets/mp3/barakhari/ञ.mp3', active: false },
  { name: 'ञा', audioUrl: '/assets/mp3/barakhari/ञा.mp3', active: false },
  { name: 'ञि', audioUrl: '/assets/mp3/barakhari/ञि.mp3', active: false },
  { name: 'ञी', audioUrl: '/assets/mp3/barakhari/ञी.mp3', active: false },
  { name: 'ञु', audioUrl: '/assets/mp3/barakhari/ञु.mp3', active: false },
  { name: 'ञू', audioUrl: '/assets/mp3/barakhari/ञू.mp3', active: false },
  { name: 'ञे', audioUrl: '/assets/mp3/barakhari/ञे.mp3', active: false },
  { name: 'ञै', audioUrl: '/assets/mp3/barakhari/ञै.mp3', active: false },
  { name: 'ञो', audioUrl: '/assets/mp3/barakhari/ञो.mp3', active: false },
  { name: 'ञृ', audioUrl: '/assets/mp3/barakhari/ञृ.mp3', active: false },
  { name: 'ञँ', audioUrl: '/assets/mp3/barakhari/ञँ.mp3', active: false },
  { name: 'ट', audioUrl: '/assets/mp3/barakhari/ट.mp3', active: false },
  { name: 'टा', audioUrl: '/assets/mp3/barakhari/टा.mp3', active: false },
  { name: 'टि', audioUrl: '/assets/mp3/barakhari/टि.mp3', active: false },
  { name: 'टी', audioUrl: '/assets/mp3/barakhari/टी.mp3', active: false },
  { name: 'टु', audioUrl: '/assets/mp3/barakhari/टु.mp3', active: false },
  { name: 'टू', audioUrl: '/assets/mp3/barakhari/टू.mp3', active: false },
  { name: 'टे', audioUrl: '/assets/mp3/barakhari/टे.mp3', active: false },
  { name: 'टै', audioUrl: '/assets/mp3/barakhari/टै.mp3', active: false },
  { name: 'टो', audioUrl: '/assets/mp3/barakhari/टो.mp3', active: false },
  { name: 'टौ', audioUrl: '/assets/mp3/barakhari/टौ.mp3', active: false },
  { name: 'टं', audioUrl: '/assets/mp3/barakhari/टं.mp3', active: false },
  { name: 'टः', audioUrl: '/assets/mp3/barakhari/टः.mp3', active: false },
  { name: 'टृ', audioUrl: '/assets/mp3/barakhari/टृ.mp3', active: false },
  { name: 'टँ', audioUrl: '/assets/mp3/barakhari/टँ.mp3', active: false },
  { name: 'ठ', audioUrl: '/assets/mp3/barakhari/ठ.mp3', active: false },
  { name: 'ठा', audioUrl: '/assets/mp3/barakhari/ठा.mp3', active: false },
  { name: 'ठि', audioUrl: '/assets/mp3/barakhari/ठि.mp3', active: false },
  { name: 'ठी', audioUrl: '/assets/mp3/barakhari/ठी.mp3', active: false },
  { name: 'ठु', audioUrl: '/assets/mp3/barakhari/ठु.mp3', active: false },
  { name: 'ठू', audioUrl: '/assets/mp3/barakhari/ठू.mp3', active: false },
  { name: 'ठे', audioUrl: '/assets/mp3/barakhari/ठे.mp3', active: false },
  { name: 'ठै', audioUrl: '/assets/mp3/barakhari/ठै.mp3', active: false },
  { name: 'ठो', audioUrl: '/assets/mp3/barakhari/ठो.mp3', active: false },
  { name: 'ठौ', audioUrl: '/assets/mp3/barakhari/ठौ.mp3', active: false },
  { name: 'ठं', audioUrl: '/assets/mp3/barakhari/ठं.mp3', active: false },
  { name: 'ठः', audioUrl: '/assets/mp3/barakhari/ठः.mp3', active: false },
  { name: 'ठृ', audioUrl: '/assets/mp3/barakhari/ठृ.mp3', active: false },
  { name: 'ठँ', audioUrl: '/assets/mp3/barakhari/ठँ.mp3', active: false },
  { name: 'ड', audioUrl: '/assets/mp3/barakhari/ड.mp3', active: false },
  { name: 'डा', audioUrl: '/assets/mp3/barakhari/डा.mp3', active: false },
  { name: 'डि', audioUrl: '/assets/mp3/barakhari/डि.mp3', active: false },
  { name: 'डी', audioUrl: '/assets/mp3/barakhari/डी.mp3', active: false },
  { name: 'डु', audioUrl: '/assets/mp3/barakhari/डु.mp3', active: false },
  { name: 'डू', audioUrl: '/assets/mp3/barakhari/डू.mp3', active: false },
  { name: 'डे', audioUrl: '/assets/mp3/barakhari/डे.mp3', active: false },
  { name: 'डै', audioUrl: '/assets/mp3/barakhari/डै.mp3', active: false },
  { name: 'डो', audioUrl: '/assets/mp3/barakhari/डो.mp3', active: false },
  { name: 'डौ', audioUrl: '/assets/mp3/barakhari/डौ.mp3', active: false },
  { name: 'डं', audioUrl: '/assets/mp3/barakhari/डं.mp3', active: false },
  { name: 'डः', audioUrl: '/assets/mp3/barakhari/डः.mp3', active: false },
  { name: 'डः', audioUrl: '/assets/mp3/barakhari/डः.mp3', active: false },
  { name: 'डृ', audioUrl: '/assets/mp3/barakhari/डृ.mp3', active: false },
  { name: 'डँ', audioUrl: '/assets/mp3/barakhari/डँ.mp3', active: false },
  { name: 'ढ', audioUrl: '/assets/mp3/barakhari/ढ.mp3', active: false },
  { name: 'ढा', audioUrl: '/assets/mp3/barakhari/ढा.mp3', active: false },
  { name: 'ढि', audioUrl: '/assets/mp3/barakhari/ढि.mp3', active: false },
  { name: 'ढी', audioUrl: '/assets/mp3/barakhari/ढी.mp3', active: false },
  { name: 'ढु', audioUrl: '/assets/mp3/barakhari/ढु.mp3', active: false },
  { name: 'ढू', audioUrl: '/assets/mp3/barakhari/ढू.mp3', active: false },
  { name: 'ढे', audioUrl: '/assets/mp3/barakhari/ढे.mp3', active: false },
  { name: 'ढै', audioUrl: '/assets/mp3/barakhari/ढै.mp3', active: false },
  { name: 'ढो', audioUrl: '/assets/mp3/barakhari/ढो.mp3', active: false },
  { name: 'ढौ', audioUrl: '/assets/mp3/barakhari/ढौ.mp3', active: false },
  { name: 'ढं', audioUrl: '/assets/mp3/barakhari/ढं.mp3', active: false },
  { name: 'ढः', audioUrl: '/assets/mp3/barakhari/ढः.mp3', active: false },
  { name: 'ढृ', audioUrl: '/assets/mp3/barakhari/ढृ.mp3', active: false },
  { name: 'ढँ', audioUrl: '/assets/mp3/barakhari/ढँ.mp3', active: false },
  { name: 'ण', audioUrl: '/assets/mp3/barakhari/ण.mp3', active: false },
  { name: 'णा', audioUrl: '/assets/mp3/barakhari/णा.mp3', active: false },
  { name: 'णि', audioUrl: '/assets/mp3/barakhari/णि.mp3', active: false },
  { name: 'णी', audioUrl: '/assets/mp3/barakhari/णी.mp3', active: false },
  { name: 'णु', audioUrl: '/assets/mp3/barakhari/णु.mp3', active: false },
  { name: 'णू', audioUrl: '/assets/mp3/barakhari/णू.mp3', active: false },
  { name: 'णे', audioUrl: '/assets/mp3/barakhari/णे.mp3', active: false },
  { name: 'णै', audioUrl: '/assets/mp3/barakhari/णै.mp3', active: false },
  { name: 'णो', audioUrl: '/assets/mp3/barakhari/णो.mp3', active: false },
  { name: 'णौ', audioUrl: '/assets/mp3/barakhari/णौ.mp3', active: false },
  { name: 'णं', audioUrl: '/assets/mp3/barakhari/णं.mp3', active: false },
  { name: 'णः', audioUrl: '/assets/mp3/barakhari/णः.mp3', active: false },
  { name: 'णृ', audioUrl: '/assets/mp3/barakhari/णृ.mp3', active: false },
  { name: 'णँ', audioUrl: '/assets/mp3/barakhari/णँ.mp3', active: false },
  { name: 'त', audioUrl: '/assets/mp3/barakhari/त.mp3', active: false },
  { name: 'ता', audioUrl: '/assets/mp3/barakhari/ता.mp3', active: false },
  { name: 'ति', audioUrl: '/assets/mp3/barakhari/ति.mp3', active: false },
  { name: 'ती', audioUrl: '/assets/mp3/barakhari/ती.mp3', active: false },
  { name: 'तु', audioUrl: '/assets/mp3/barakhari/तु.mp3', active: false },
  { name: 'तू', audioUrl: '/assets/mp3/barakhari/तू.mp3', active: false },
  { name: 'ते', audioUrl: '/assets/mp3/barakhari/ते.mp3', active: false },
  { name: 'तै', audioUrl: '/assets/mp3/barakhari/तै.mp3', active: false },
  { name: 'तो', audioUrl: '/assets/mp3/barakhari/तो.mp3', active: false },
  { name: 'तौ', audioUrl: '/assets/mp3/barakhari/तौ.mp3', active: false },
  { name: 'तं', audioUrl: '/assets/mp3/barakhari/तं.mp3', active: false },
  { name: 'तः', audioUrl: '/assets/mp3/barakhari/तः.mp3', active: false },
  { name: 'तृ', audioUrl: '/assets/mp3/barakhari/तृ.mp3', active: false },
  { name: 'तँ', audioUrl: '/assets/mp3/barakhari/तँ.mp3', active: false },
  { name: 'थ', audioUrl: '/assets/mp3/barakhari/थ.mp3', active: false },
  { name: 'था', audioUrl: '/assets/mp3/barakhari/था.mp3', active: false },
  { name: 'थि', audioUrl: '/assets/mp3/barakhari/थि.mp3', active: false },
  { name: 'थी', audioUrl: '/assets/mp3/barakhari/थी.mp3', active: false },
  { name: 'थु', audioUrl: '/assets/mp3/barakhari/थु.mp3', active: false },
  { name: 'थू', audioUrl: '/assets/mp3/barakhari/थू.mp3', active: false },
  { name: 'थे', audioUrl: '/assets/mp3/barakhari/थे.mp3', active: false },
  { name: 'थै', audioUrl: '/assets/mp3/barakhari/थै.mp3', active: false },
  { name: 'थो', audioUrl: '/assets/mp3/barakhari/थो.mp3', active: false },
  { name: 'थौ', audioUrl: '/assets/mp3/barakhari/थौ.mp3', active: false },
  { name: 'थं', audioUrl: '/assets/mp3/barakhari/थं.mp3', active: false },
  { name: 'थः', audioUrl: '/assets/mp3/barakhari/थः.mp3', active: false },
  { name: 'थृ', audioUrl: '/assets/mp3/barakhari/थृ.mp3', active: false },
  { name: 'थँ', audioUrl: '/assets/mp3/barakhari/थँ.mp3', active: false },
  { name: 'द', audioUrl: '/assets/mp3/barakhari/द.mp3', active: false },
  { name: 'दा', audioUrl: '/assets/mp3/barakhari/दा.mp3', active: false },
  { name: 'दि', audioUrl: '/assets/mp3/barakhari/दि.mp3', active: false },
  { name: 'दी', audioUrl: '/assets/mp3/barakhari/दी.mp3', active: false },
  { name: 'दु', audioUrl: '/assets/mp3/barakhari/दु.mp3', active: false },
  { name: 'दू', audioUrl: '/assets/mp3/barakhari/दू.mp3', active: false },
  { name: 'दे', audioUrl: '/assets/mp3/barakhari/दे.mp3', active: false },
  { name: 'दै', audioUrl: '/assets/mp3/barakhari/दै.mp3', active: false },
  { name: 'दो', audioUrl: '/assets/mp3/barakhari/दो.mp3', active: false },
  { name: 'दौ', audioUrl: '/assets/mp3/barakhari/दौ.mp3', active: false },
  { name: 'दं', audioUrl: '/assets/mp3/barakhari/दं.mp3', active: false },
  { name: 'दः', audioUrl: '/assets/mp3/barakhari/दः.mp3', active: false },
  { name: 'दृ', audioUrl: '/assets/mp3/barakhari/दृ.mp3', active: false },
  { name: 'दँ', audioUrl: '/assets/mp3/barakhari/दँ.mp3', active: false },
  { name: 'ध', audioUrl: '/assets/mp3/barakhari/ध.mp3', active: false },
  { name: 'धा', audioUrl: '/assets/mp3/barakhari/धा.mp3', active: false },
  { name: 'धि', audioUrl: '/assets/mp3/barakhari/धि.mp3', active: false },
  { name: 'धी', audioUrl: '/assets/mp3/barakhari/धी.mp3', active: false },
  { name: 'धु', audioUrl: '/assets/mp3/barakhari/धु.mp3', active: false },
  { name: 'धू', audioUrl: '/assets/mp3/barakhari/धू.mp3', active: false },
  { name: 'धे', audioUrl: '/assets/mp3/barakhari/धे.mp3', active: false },
  { name: 'धै', audioUrl: '/assets/mp3/barakhari/धै.mp3', active: false },
  { name: 'धो', audioUrl: '/assets/mp3/barakhari/धो.mp3', active: false },
  { name: 'धौ', audioUrl: '/assets/mp3/barakhari/धौ.mp3', active: false },
  { name: 'धं', audioUrl: '/assets/mp3/barakhari/धं.mp3', active: false },
  { name: 'धः', audioUrl: '/assets/mp3/barakhari/धः.mp3', active: false },
  { name: 'धृ', audioUrl: '/assets/mp3/barakhari/धृ.mp3', active: false },
  { name: 'धृ', audioUrl: '/assets/mp3/barakhari/धृ.mp3', active: false },
  { name: 'न', audioUrl: '/assets/mp3/barakhari/न.mp3', active: false },
  { name: 'ना', audioUrl: '/assets/mp3/barakhari/ना.mp3', active: false },
  { name: 'नि', audioUrl: '/assets/mp3/barakhari/नि.mp3', active: false },
  { name: 'नी', audioUrl: '/assets/mp3/barakhari/नी.mp3', active: false },
  { name: 'ने', audioUrl: '/assets/mp3/barakhari/ने.mp3', active: false },
  { name: 'नै', audioUrl: '/assets/mp3/barakhari/नै.mp3', active: false },
  { name: 'नो', audioUrl: '/assets/mp3/barakhari/नो.mp3', active: false },
  { name: 'नौ', audioUrl: '/assets/mp3/barakhari/नौ.mp3', active: false },
  { name: 'नं', audioUrl: '/assets/mp3/barakhari/नं.mp3', active: false },
  { name: 'नः', audioUrl: '/assets/mp3/barakhari/नः.mp3', active: false },
  { name: 'नृ', audioUrl: '/assets/mp3/barakhari/नृ.mp3', active: false },
  { name: 'नँ', audioUrl: '/assets/mp3/barakhari/नँ.mp3', active: false },
  { name: 'प', audioUrl: '/assets/mp3/barakhari/प.mp3', active: false },
  { name: 'पा', audioUrl: '/assets/mp3/barakhari/पा.mp3', active: false },
  { name: 'पि', audioUrl: '/assets/mp3/barakhari/पि.mp3', active: false },
  { name: 'पी', audioUrl: '/assets/mp3/barakhari/पी.mp3', active: false },
  { name: 'पु', audioUrl: '/assets/mp3/barakhari/पु.mp3', active: false },
  { name: 'पू', audioUrl: '/assets/mp3/barakhari/पू.mp3', active: false },
  { name: 'पे', audioUrl: '/assets/mp3/barakhari/पे.mp3', active: false },
  { name: 'पै', audioUrl: '/assets/mp3/barakhari/पै.mp3', active: false },
  { name: 'पो', audioUrl: '/assets/mp3/barakhari/पो.mp3', active: false },
  { name: 'पौ', audioUrl: '/assets/mp3/barakhari/पौ.mp3', active: false },
  { name: 'पं', audioUrl: '/assets/mp3/barakhari/पं.mp3', active: false },
  { name: 'पः', audioUrl: '/assets/mp3/barakhari/पः.mp3', active: false },
  { name: 'पृ', audioUrl: '/assets/mp3/barakhari/पृ.mp3', active: false },
  { name: 'पँ', audioUrl: '/assets/mp3/barakhari/पँ.mp3', active: false },
  { name: 'फ', audioUrl: '/assets/mp3/barakhari/फ.mp3', active: false },
  { name: 'फा', audioUrl: '/assets/mp3/barakhari/फा.mp3', active: false },
  { name: 'फि', audioUrl: '/assets/mp3/barakhari/फि.mp3', active: false },
  { name: 'फी', audioUrl: '/assets/mp3/barakhari/फी.mp3', active: false },
  { name: 'फु', audioUrl: '/assets/mp3/barakhari/फु.mp3', active: false },
  { name: 'फू', audioUrl: '/assets/mp3/barakhari/फू.mp3', active: false },
  { name: 'फे', audioUrl: '/assets/mp3/barakhari/फे.mp3', active: false },
  { name: 'फै', audioUrl: '/assets/mp3/barakhari/फै.mp3', active: false },
  { name: 'फो', audioUrl: '/assets/mp3/barakhari/फो.mp3', active: false },
  { name: 'फौ', audioUrl: '/assets/mp3/barakhari/फौ.mp3', active: false },
  { name: 'फं', audioUrl: '/assets/mp3/barakhari/फं.mp3', active: false },
  { name: 'फः', audioUrl: '/assets/mp3/barakhari/फः.mp3', active: false },
  { name: 'फृ', audioUrl: '/assets/mp3/barakhari/फृ.mp3', active: false },
  { name: 'फँ', audioUrl: '/assets/mp3/barakhari/फँ.mp3', active: false },
  { name: 'ब', audioUrl: '/assets/mp3/barakhari/ब.mp3', active: false },
  { name: 'बा', audioUrl: '/assets/mp3/barakhari/बा.mp3', active: false },
  { name: 'बि', audioUrl: '/assets/mp3/barakhari/बि.mp3', active: false },
  { name: 'बी', audioUrl: '/assets/mp3/barakhari/बी.mp3', active: false },
  { name: 'बु', audioUrl: '/assets/mp3/barakhari/बु.mp3', active: false },
  { name: 'बू', audioUrl: '/assets/mp3/barakhari/बू.mp3', active: false },
  { name: 'बे', audioUrl: '/assets/mp3/barakhari/बे.mp3', active: false },
  { name: 'बै', audioUrl: '/assets/mp3/barakhari/बै.mp3', active: false },
  { name: 'बो', audioUrl: '/assets/mp3/barakhari/बो.mp3', active: false },
  { name: 'बौ', audioUrl: '/assets/mp3/barakhari/बौ.mp3', active: false },
  { name: 'बं', audioUrl: '/assets/mp3/barakhari/बं.mp3', active: false },
  { name: 'बः', audioUrl: '/assets/mp3/barakhari/बः.mp3', active: false },
  { name: 'बृ', audioUrl: '/assets/mp3/barakhari/बृ.mp3', active: false },
  { name: 'बँ', audioUrl: '/assets/mp3/barakhari/बँ.mp3', active: false },
  { name: 'भ', audioUrl: '/assets/mp3/barakhari/भ.mp3', active: false },
  { name: 'भा', audioUrl: '/assets/mp3/barakhari/भा.mp3', active: false },
  { name: 'भि', audioUrl: '/assets/mp3/barakhari/भि.mp3', active: false },
  { name: 'भी', audioUrl: '/assets/mp3/barakhari/भी.mp3', active: false },
  { name: 'भु', audioUrl: '/assets/mp3/barakhari/भु.mp3', active: false },
  { name: 'भू', audioUrl: '/assets/mp3/barakhari/भू.mp3', active: false },
  { name: 'भे', audioUrl: '/assets/mp3/barakhari/भे.mp3', active: false },
  { name: 'भै', audioUrl: '/assets/mp3/barakhari/भै.mp3', active: false },
  { name: 'भो', audioUrl: '/assets/mp3/barakhari/भो.mp3', active: false },
  { name: 'भौ', audioUrl: '/assets/mp3/barakhari/भौ.mp3', active: false },
  { name: 'भं', audioUrl: '/assets/mp3/barakhari/भं.mp3', active: false },
  { name: 'भः', audioUrl: '/assets/mp3/barakhari/भः.mp3', active: false },
  { name: 'भृ', audioUrl: '/assets/mp3/barakhari/भृ.mp3', active: false },
  { name: 'भँ', audioUrl: '/assets/mp3/barakhari/भँ.mp3', active: false },
  { name: 'म', audioUrl: '/assets/mp3/barakhari/म.mp3', active: false },
  { name: 'मा', audioUrl: '/assets/mp3/barakhari/मा.mp3', active: false },
  { name: 'मि', audioUrl: '/assets/mp3/barakhari/मि.mp3', active: false },
  { name: 'मी', audioUrl: '/assets/mp3/barakhari/मी.mp3', active: false },
  { name: 'मु', audioUrl: '/assets/mp3/barakhari/मु.mp3', active: false },
  { name: 'मू', audioUrl: '/assets/mp3/barakhari/मू.mp3', active: false },
  { name: 'मे', audioUrl: '/assets/mp3/barakhari/मे.mp3', active: false },
  { name: 'मै', audioUrl: '/assets/mp3/barakhari/मै.mp3', active: false },
  { name: 'मो', audioUrl: '/assets/mp3/barakhari/मो.mp3', active: false },
  { name: 'मौ', audioUrl: '/assets/mp3/barakhari/मौ.mp3', active: false },
  { name: 'मं', audioUrl: '/assets/mp3/barakhari/मं.mp3', active: false },
  { name: 'मः', audioUrl: '/assets/mp3/barakhari/मः.mp3', active: false },
  { name: 'मृ', audioUrl: '/assets/mp3/barakhari/मृ.mp3', active: false },
  { name: 'मँ', audioUrl: '/assets/mp3/barakhari/मँ.mp3', active: false },
];

function Index() {
  const [swaraMap, setSwaraMap] = useState(initialSwaraMap);

  // Function to handle play audio and toggle active state
  const handlePlayAudio = (audioUrl: string, name: string) => {
    const audio = new Audio(audioUrl);
    audio.play();

    // Update the swaraMap to toggle the 'active' state
    const updatedSwaraMap = swaraMap.map(item => {
      if (item.name === name) {
        return { ...item, active: !item.active };
      }
      return item;
    });

    setSwaraMap(updatedSwaraMap);
  };

  return (
    <div className={styles.LearningPage}>
      <div className={styles.LearningWrap}>
        <Container>
          <div className={styles.baloonTitle}>
            <h2>Barakhari - Pop all the 340 balloons! 🤪🎈🎊</h2>
          </div>
          <div className={styles.baloonGroup}>
            {swaraMap.map((item, index) => (
              <div
                key={index}
                className={`${styles.SingleBaloon} ${item.active ? 'active' : ''}`}
                onClick={() => handlePlayAudio(item.audioUrl, item.name)}
              >
                <div className={styles.BaloonImg}>
                  <img src="/assets/images/yellow_baloon.png" alt="Balloon" />
                </div>
                <div className={styles.SvarWrap}>
                  <h5 style={{ cursor: 'pointer' }}>{item.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Index;
