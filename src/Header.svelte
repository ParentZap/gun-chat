<script>
    import {username, user} from './user'

    function signout() {
        user.leave();
        username.set('');
    }
</script>

<style>
  h1 {
    color: #4d0450;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  .user-bio {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
  }

  .user-bio span {
      font-size:x-large;
  }

  .signout-button {
      float: right;
  }
</style>

<header>
    <h1>Gun chat!</h1>

    {#if $username}
        <div class="user-bio">
            <span>Hello <strong> {$username}</strong></span>
            <img src={`https://avatars.dicebear.com/api/adventurer/${$username}.svg`} alt="Profile" width="200"/>
        </div>

        <button class="signout-button" on:click={signout}>
            Sign Out
        </button>
    {:else}
        <h3>Gun.js Chat</h3>
    {/if}
</header>