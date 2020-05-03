<svelte:head>
    <title>Speech Synthesis Demo</title>
</svelte:head>

<script>
    import Button, {Label} from "@smui/button";
    
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


{#if isTextToSpeechEnabled}
    <input bind:value={text} placeholder="Enter a phrase..."/>

    <select bind:value={selectedVoiceIndex}>
        {#each availableVoices as {name, lang}, index}
            <option value={index}>
                {name} - {lang}
            </option>
        {/each}
    </select>

    <Button on:click={utterText} variant="unelevated" color="primary">
        <Label>Play Phrase</Label>
    </Button>
{:else}
    <h2>Speech to text not supported by your browser</h2>
{/if}



