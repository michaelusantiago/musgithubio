<script lang="ts">
  import me from "@/assets/me.jpg"
</script>

<div>
  <div class="image-container">
    <img
      class="my-image"
      alt="it's just me"
      src={me}
      height="250"
    />
  </div>
  <h1 class="my-name">Michael Santiago</h1>
  <h2>Software Architect</h2>
  <br />
  <section>
    <p>
      This for now, while waiting for
      <a href=https://michaelsantiago.ca>https://michaelsantiago.ca</a>.
    </p>
    <br />
    <a href="#/cv">Curriculum Vitae</a>
  </section>
  <br />
  <h3>💪 I'm the <a href="https://neontech.vercel.app" target="_blank" rel="noreferrer">NeonTech</a> anyway...</h3>
  <br />
  <footer>
    <hr />
    <p>MICHAEL SANTIAGO © 2023</p>
  </footer>
</div>

<style>
  .my-name { text-transform: uppercase; }

  .image-container {
    display: flex;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    overflow: hidden;
    margin: auto;
    justify-content: center;
    margin-bottom: 27px;
  }

  footer { font-size: 0.9rem; }
  footer p { padding: 3px; }

  hr { border-style: dotted; }
</style>