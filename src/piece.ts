import { TemplateResult, html, nothing } from 'lit';
import { Piece } from './types';

export const PIECE_VALUES: Record<Piece, number> = {
  k: 1_000,
  q: 9,
  b: 3,
  n: 3,
  r: 5,
  p: 1,
  K: 1_000,
  Q: 9,
  B: 3,
  N: 3,
  R: 5,
  P: 1,
};

export const DEFAULT_PIECE_SIZE = 60;

export const renderPiece = (
  piece: Piece,
  size: number = DEFAULT_PIECE_SIZE,
  translate = true,
): TemplateResult | typeof nothing => {
  if (piece === null) return nothing;
  let id: keyof typeof pieceUrls;
  switch (piece) {
    case 'k':
      id = 'black-king';
      break;
    case 'q':
      id = 'black-queen';
      break;
    case 'b':
      id = 'black-bishop';
      break;
    case 'n':
      id = 'black-knight';
      break;
    case 'r':
      id = 'black-rook';
      break;
    case 'p':
      id = 'black-pawn';
      break;
    case 'K':
      id = 'white-king';
      break;
    case 'Q':
      id = 'white-queen';
      break;
    case 'B':
      id = 'white-bishop';
      break;
    case 'N':
      id = 'white-knight';
      break;
    case 'R':
      id = 'white-rook';
      break;
    case 'P':
      id = 'white-pawn';
      break;
  }
  const style = translate
    ? `transform: translate(-${size / 2}px, -${size / 2}px)`
    : '';
  return html`<img
    src="${pieceUrls[id]}"
    style="${style}"
    class="piece"
    height="${size}"
    width="${size}"
  />`;
};

/*const pieceUrls = {
  'black-bishop':
    'https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_bdt60.png?20120721213129',
  'white-bishop':
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/Chess_blt60.png?20120721213130',
  'black-king':
    'https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_kdt60.png?20120721213131',
  'white-king':
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_klt60.png?20120721213131',
  'black-knight':
    'https://upload.wikimedia.org/wikipedia/commons/f/f1/Chess_ndt60.png?20120721213132',
  'white-knight':
    'https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt60.png?20120721213133',
  'black-pawn':
    'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chess_pdt60.png?20120721213133',
  'white-pawn':
    'https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt60.png?20120721213134',
  'black-queen':
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Chess_qdt60.png?20120721213134',
  'white-queen':
    'https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png?20120721213135',
  'black-rook':
    'https://upload.wikimedia.org/wikipedia/commons/a/a0/Chess_rdt60.png?20120721213136',
  'white-rook':
    'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png?20120721213128',
};
*/
const pieceUrls = {
  'black-bishop':
    '../img/black-bishop.png',
  'white-bishop':
    '../img/white-bishop.png',
  'black-king':
    '../img/black-king.png',
  'white-king':
    '../img/white-king.png',
  'black-knight':
    '../img/black-knight.png',
  'white-knight':
    '../img/white-knight.png',
  'black-pawn':
    '../img/black-pawn.png',
  'white-pawn':
    '../img/white-pawn.png',
  'black-queen':
    '../img/black-queen.png',
  'white-queen':
    '../img/white-queen.png',
  'black-rook':
    '../img/black-rook.png',
  'white-rook':
    '../img/white-rook.png',
  'black-chancellor':
    '../img/black-chancel.png',
  'white-chancellor':
    '../img/white-chancel.png',
  'black-archbishop':
    '../img/black-archbis.png',
  'white-archbishop':
    '../img/white-archbis.png',  
};
