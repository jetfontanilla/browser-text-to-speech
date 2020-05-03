<script>
    const isTextToSpeechEnabled = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    let text = "";
    let selectedVoiceIndex = 0;
    let speechSynth = window.speechSynthesis;
    let availableVoices = [];

    function utterText() {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = speechSynth.getVoices()[selectedVoiceIndex];
        speechSynth.speak(utterance);
    }

    // window.speechSynthesis.getVoices() is an async task. invoking it immediately returns an empty array
    setTimeout(() => {
        availableVoices = isTextToSpeechEnabled ? speechSynth.getVoices() : [];
    }, 1000);
</script>


<div class="container">
    {#if isTextToSpeechEnabled}
        <div class="section">
            <textarea class="phrase" bind:value={text} placeholder="Enter a phrase..."></textarea>
        </div>

        <div class="section">
            <select class="voices" bind:value={selectedVoiceIndex}>
                {#each availableVoices as {name, lang}, index}
                    <option value={index}>
                        {name} - {lang}
                    </option>
                {/each}
            </select>

            <button class="primary" on:click={utterText}>
                <span>Play Phrase</span>
            </button>
        </div>
    {:else}
        <h2>Speech to text not supported by your browser</h2>
    {/if}
</div>




