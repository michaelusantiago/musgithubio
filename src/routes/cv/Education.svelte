<script lang="ts">

</script>

<main>
    <section class="education">
        <h3>Education</h3>
        <!--  Bachelor Of Science In Computer Science -->
        <div class="body">
            <p class="year">2001 - 2005</p>
            <div class="wrapper">
                <div class="details">
                    <p class="title">Bachelor of Science in Computer Science</p>
                    <a class="school" href="https://psu.palawan.edu.ph" target="_blank" rel="noreferrer">Palawan State University</a>
                </div>
            </div>
        </div>

        <!-- Certificate in Information Systems -->
        <div class="body">
            <p class="year">1999 - 2000</p>
            <div class="wrapper">
                <div class="details">
                    <p class="title">Certificate in Information Systems</p>
                    <a class="school" href="https://sti.edu" target="_blank" rel="noreferrer">Sytems Technology Institute</a>
                </div>
            </div>
        </div>

        <!-- Palawan National High School -->
        <div class="body">
            <p class="year">1999 - 2000</p>
            <div class="wrapper">
                <b>Secondary</b>
                <div class="details">
                    <a class="school" href="https://pns.edu.ph" target="_blank" rel="noreferrer">Palawan National High School</a>
                </div>
            </div>
        </div>

        <!-- East Elementary School -->
        <div class="body">
            <p class="year">1989 - 1995</p>
            <div class="wrapper">
                <b>Primary</b>
                <div class="details">
                    East Elementary School
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    main { margin: 17px 0; }
    .body {
        display: flex;
        padding: 15px 10px;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .body .wrapper { flex: 3; }
    .body .year {
        flex: 0.5;
        font-size: 0.9rem;
    }

    .title {
        font-weight: bold;
    }
    .school { font-size: 0.95rem; }
</style>