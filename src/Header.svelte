<script>
    import {username, user} from './user'

    function signout() {
        user.leave();
        username.set('');
    }
</script>

<header>
    <h1>Gun chat!</h1>

    {#if $username}
        <div class="user-bio">
            <span>Hello <strong> {$username}</strong></span>
            <img src={"https://avatars.dicebear.com/api/adventurer/${$username}.svg"}/>
        </div>

        <button class="signout-button" on
    {/if}
</header>