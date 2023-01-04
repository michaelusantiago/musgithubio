<script lang='ts'>
</script>

<main>
    <section class="project">
        <h3>Projects</h3>
        <!-- My Personal Website -->
        <div class="body">
            <p class="year">Present</p>
            <div class="container">
                <div class="details">
                    <a href="https://michaelsantiago.ca" target="_blank" rel="noreferrer"><b>My Personal Website</b></a>
                    <p class="description">Fullstack Web App Development</p>
                    <div class="stacks">
                        <span>NodeJS</span>
                        <span>SvelteKit</span>
                        <span>PocketBase</span>
                        <span>TypeScript</span>
                        <span>TailWind</span>
                        <span>Linode</span>
                        <span>Docker</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- NeonTech IT Solutions -->
        <div class="body">
            <p class="year">2022</p>
            <div class="container">
                <div class="details">
                    <a href="https://neontech.vercel.app" target="_blank" rel="noreferrer"><b>NeonTech IT Solutions</b></a>
                    <p class="description">Fullstack Web App Development</p>
                    <div class="stacks">
                        <span>NodeJS</span>
                        <span>React</span>
                        <span>Svelte/SvelteKit</span>
                        <span>MongoDB</span>
                        <span>TypeScript</span>
                        <span>TailWind</span>
                        <span>Vercel</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Skeep -->
        <div class="body">
            <p class="year">2020</p>
            <div class="container">
                <div class="details">
                    <b>Skeep (Secrets Notes Keeper)</b> 
                    <p class="description">A Windows desktop application. Simple note keeper, secured.</p>
                    <div class="stacks">
                        <span>C Win32 API</span>
                        <span>Windows</span>
                        <span>SQLite</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- BizWize -->
        <div class="body">
            <p class="year">2016</p>
            <div class="container">
                <div class="details">
                    <b>BizWize</b> 
                    <p class="description">A POS designed to run both in windows/linux desktop application. It evolved to POS22.</p>
                    <div class="stacks">
                        <span>QT C++</span>
                        <span>Windows</span>
                        <span>Linux</span>
                        <span>MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    main { margin: 17px 0; }
    .stacks span {
        font-family:'Courier New', Courier, monospace;
        border-radius: 35px;
        padding: 4px 10px;
        background-color: darkgray;
        color: white;
        font-size: 0.78rem;
    }

    .body {
        display: flex;
        padding: 15px 10px;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .body .container { flex: 3; }
    .body .year {
        flex: 0.5;
        font-size: 0.9rem;
    }

    .description { font-size: 0.88rem; }
</style>