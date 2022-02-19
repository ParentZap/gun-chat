import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

// Database
export const db = GUN();

// Gun User
export const user = db.user().recall({sessionStorage: true});

export const username = writable('');

user.get('alias').on(v => username.set(v));

db.on('auth', async(event) => {
    const alias = await user.get('alias');
    username.set(alias);

    console.log('signed in as ${alias}');
});