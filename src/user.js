import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

// Database
export const db = GUN();

// Gun User
export const user = db.user().recall({sessionStorage: true});

export const username = writable('');

// @ts-ignore
user.get('alias').on(v => username.set(v));

// @ts-ignore
db.on('auth', async(event) => {
    // @ts-ignore
    const alias = await user.get('alias');
    // @ts-ignore
    username.set(alias);

    console.log('signed in as ${alias}');
});