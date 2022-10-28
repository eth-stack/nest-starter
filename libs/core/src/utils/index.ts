import { customAlphabet } from 'nanoid/async';

const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 21);
export function newId() {
  return nanoid();
}
