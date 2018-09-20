import './index.css';
import numeral from 'numeral';

/* eslint-disable no-console */

const coursValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${coursValue} for this course!`);