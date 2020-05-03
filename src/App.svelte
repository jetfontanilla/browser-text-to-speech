<script>
    let isTextToSpeechEnabled = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
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
    function initializeSpeechSynth() {
        console.log(retries);
        setTimeout(() => {
            availableVoices = speechSynth.getVoices();
            if (availableVoices.length === 0) {
                if (retries > 0) {
                    retries -= 1;
                    initializeSpeechSynth();
                } else {
                    isLoading = false;
                    isTextToSpeechEnabled = false;
                }
            } else {
                isLoading = false;
            }
        }, 1000);
    }

    let retries = 3;
    let isLoading = isTextToSpeechEnabled;
    if (isTextToSpeechEnabled) {
        initializeSpeechSynth();
    }

</script>


<div class="container">
    {#if isLoading}
        <div class="section centered">
            <div class="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>Fetching available voices...</div>
        </div>
    {:else if isTextToSpeechEnabled}
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




