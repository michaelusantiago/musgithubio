<script lang="ts">
    import Projects from "./cv/Projects.svelte"
    import WorkExperience from "./cv/WorkExperience.svelte"
    import Education from "./cv/Education.svelte";
    const last_updated = new Date("January 04, 2023 22:49:00 GMT+08").toLocaleString("en-us", { timeZone: "Asia/Manila",  dateStyle: "long", timeStyle: "medium" });

    function onClickPrint() {
        // TODO: Should print the CV part (body) only
        window.print()
    }
</script>

<main>
    <div class="printable">
        <div class="head">
            <div class="left-info" >
                <h1 class="my-name">Michael Santiago</h1>
                <h3>Full Stack Web App Developer</h3>
                <h4>[Svelte/SvelteKit, Javascript/TypeScript, NodeJS, SQL, MongoDB]</h4>
            </div>
            <div class="right-info">
                <h4>Contact</h4>
                <p><i class="ri-global-line"></i>&nbsp;https://michaelusantiago.github.io</p>
                <p><i class="ri-mail-line"></i>&nbsp;michael.u.santiago@gmail.com</p>
                <p><i class="ri-cellphone-line"></i>&nbsp;+639957221274</p>
            </div>
        </div>
        <hr />

        <div class="body">
            <!-- Projects -->
            <Projects />

            <!-- Work Experience -->
            <WorkExperience />

            <!-- Education -->
            <Education />
        </div>
    </div>

    <hr />
    <div class="foot"><p>Last updated: {last_updated} - Asia/Manila</p></div>

    <br />
    <footer>
        <a class="back-home" href="/">Back Home</a>
        &nbsp;|&nbsp;
        <button on:click={onClickPrint}>Print</button>
    </footer>
</main>

<style>
    main {
        width: 800px;
        text-align: left;
        padding: 20px;
        margin: auto;
    }

    .head {
        display: flex;
        place-content: center;
        justify-content: flex-start;
        gap: 3px;
    }
    .head .left-info { flex:3; }
    .head .right-info { flex: 1; }
    .head .right-info p {
        display: flex;
        align-items: center;
    }

    .my-name { text-transform: uppercase; }

    .foot {
        font-size: 0.85rem;
        background-color: darkgray;
        padding: 2px 10px;
    }

    footer {
        display: flex;
        place-content: center;
        align-items: center;
    }

    @media print {
        footer { display: none; }
    }
</style>