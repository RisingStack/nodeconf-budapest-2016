import UIRules from './ui/rules';
import hashFix from './ui/hash-fix';
import header from './ui/header';

/*
 * Index module
 *
 * Import and initialises all other modules that are needed to run the app
 */

// Initialise UI rules
UIRules.init();
hashFix.init();
header.init();
