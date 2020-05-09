<script>
    const BASE_PITCH = 1.0;
    const BASE_RATE = 1.0;

    let text = "";
    let pitch = BASE_PITCH;
    let rate = BASE_RATE;
    let selectedVoiceIndex = 0;

    let isTextToSpeechEnabled = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    let speechSynth = window.speechSynthesis;
    let availableVoices = [];

    function reset() {
        text = "";
        pitch = BASE_PITCH;
        rate = BASE_RATE;
        selectedVoiceIndex = 0;
    }

    function utterText() {
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = speechSynth.getVoices()[selectedVoiceIndex];
        utterance.pitch = pitch;
        utterance.rate = rate;
        speechSynth.speak(utterance);
    }

    // window.speechSynthesis.getVoices() is an async task. invoking it immediately returns an empty array
    function initializeSpeechSynth() {
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
        <div class="section align-items-center justify-content-center">
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
            <label>
                <span class="text-label mr-5">Pitch {pitch.toFixed(1)}</span>
                <input type="range" bind:value={pitch} min="0.0" max="2.0" step="0.1">
            </label>
        </div>
        <div class="section">
            <label>
                <span class="text-label mr-5">Rate: {rate.toFixed(1)}</span>
                <input type="range" bind:value={rate} min="0.1" max="10.0" step="0.1">
            </label>
        </div>

        <div class="section">
            <label>
                <span class="text-label mr-5">Select Voice</span>
                <select class="voices" bind:value={selectedVoiceIndex}>
                    {#each availableVoices as {name, lang}, index}
                        <option value={index}>
                            {name} - {lang}
                        </option>
                    {/each}
                </select>
            </label>
        </div>

        <div class="section justify-content-center confirm">
            <button class="secondary" on:click={reset}>
                <span>Reset</span>
            </button>

            <button class="primary" on:click={utterText}>
                <span>Play Phrase</span>
            </button>
        </div>

    {:else}
        <h2>Text to speech is not supported by your browser</h2>
    {/if}
</div>




