import * as sapper from '@sapper/app';

// document.domain=document.domain;
// document.domain="localhost";

sapper.start({
	target: document.querySelector('#sapper')
});
