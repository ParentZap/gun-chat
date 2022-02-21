<script>
    // @ts-nocheck

    export let message;
    export let sender;

    const messageClass = message.who === sender ? "sent" : "received";

    const avatar = `https://avatars.dicebear.com/api/adventurer/${message.who}.svg`;

    const ts = new Date(message.when);
</script>

<style>
    /* .message-text {
        background-color: blanchedalmond;
        border-radius: 1rem;
    }

    .sent {
        background-color: blue;
        border-radius: 1rem;
    }
    .received {
        background-color: grey;
        border-radius: 1rem;
    } */

    .message {
        display: flex;
        align-items: center;
        margin: 0;
        word-wrap: break-word;
    }

    .sent {
        flex-direction: row-reverse;
    }

    time {
        font-style: italic;
    }

    p {
        border-radius: 1rem;
        padding: 0.5rem;
    }

    .sent p {
        color: white;
        background: #0b93f6;
        align-self: flex-end;
        text-align: right;
    }

    .received p {
        background: #e5e5ea;
        color: black;
        text-align: left;
    }
</style>

<div class={`message ${messageClass}`}>
    <img src={avatar} alt="avatar" width="100" />
    <span class="message-text">
        <p>
            {message.what}
            <br/>
            <time>{ts.toLocaleTimeString()}</time>
        </p>
    </span>
</div>
