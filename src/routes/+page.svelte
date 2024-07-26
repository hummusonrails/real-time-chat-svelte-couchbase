<script>
    import { onMount } from 'svelte';
  
    let messages = [];
    let newMessage = '';
  
    let ws;
  
    onMount(() => {
      ws = new WebSocket('ws://localhost:3000');
  
      ws.onmessage = (event) => {
        messages = [...messages, event.data];
      };
  
      ws.onopen = () => {
        console.log('WebSocket connection opened');
      };
  
      ws.onclose = () => {
        console.log('WebSocket connection closed');
      };
    });
  
    function sendMessage() {
      ws.send(newMessage);
      newMessage = '';
    }
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-2xl mb-4">Chat Application</h1>
    <div class="border p-4 mb-4 h-64 overflow-y-scroll">
      {#each messages as message}
        <div>{message}</div>
      {/each}
    </div>
    <input
      type="text"
      bind:value={newMessage}
      class="border p-2 w-full mb-2"
      placeholder="Type a message"
    />
    <button on:click={sendMessage} class="bg-blue-500 text-white p-2 w-full">Send</button>
  </div>
  