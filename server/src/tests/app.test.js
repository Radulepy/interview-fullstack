import request from 'supertest';
import app, { fixSentence } from '../app.js';
import { createWording } from '../app.js';

// "pig" = "igpay"
// "latin" = "atinlay"
// "smile" = "ilesmay"
// "floor"= "oorflay"
// "string" = "ingstray"

describe('test word', () => {
  it('it shoud return corect words first concons', async () => {
    const result = createWording('pig');
    expect(result).toBe('igpay');
  });

  it('it shoud return corect words first concons', async () => {
    const result = createWording('floor');
    expect(result).toBe('oorflay');
  });

  it('it shoud return corect words first wovel', async () => {
    const result = createWording('egg');
    expect(result).toBe('eggyay');
  });

  // new ones
  it('it shoud return corect words first concons', async () => {
    const result = createWording('dig');
    expect(result).toBe('igday');
  });

  it('it shoud return corect words first concons', async () => {
    const result = createWording('door');
    expect(result).toBe('oorday');
  });

  it('it shoud return corect words first wovel', async () => {
    const result = createWording('iooo');
    expect(result).toBe('ioooyay');
  });


  it('it shoud return corect sentence based on tes', async () => {
    const result = fixSentence('pleased to meet you');
    expect(result).toBe('easedplay otay eetmay ouyay');
  });

  it('it shoud return corect sentence', async () => {
    const result = fixSentence('how much does it cost');
    expect(result).toBe('owhay uchmay oesday ityay ostcay');
  });

  it('it shoud return corect sentence', async () => {
    const result = fixSentence('i would rather be at the beach');
    expect(result).toBe('iyay ouldway atherray ebay atyay ethay eachbay');
  });

  it('it shoud return corect sentence', async () => {
    const result = fixSentence('a tree whose elements have at most two children is called a binary tree');
    expect(result).toBe('ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay inarybay eetray');
  });

  it('it shoud return corect sentence', async () => {
    const result = fixSentence('Pleased to meet you');
    expect(result).toBe('Easedplay otay eetmay ouyay');
  });


  it('it shoud return corect sentence', async () => {
    const result = fixSentence('Do you speak Pig Latin');
    expect(result).toBe('Oday ouyay eakspay Igpay Atinlay');
  });

  it('it shoud return corect sentence', async () => {
    const result = fixSentence('Time flies when you are having fun');
    expect(result).toBe('Imetay iesflay enwhay ouyay areyay avinghay unfay');
  });

  it('it shoud return corect sentence', async () => {
    const result = fixSentence('A tree whose elements have at most two children is called a BINARY TREE');
    expect(result).toBe('Ayay eetray osewhay elementsyay avehay atyay ostmay otway ildrenchay isyay alledcay ayay INARYBAY EETRAY');
  });

});