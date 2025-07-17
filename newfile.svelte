<script>
  import { onMount } from 'svelte';


  let showEmojis = true;
  
  
  let flippedCards = {
    pyramid: false,
    coloring: false,
    saturn: false
  };

  const emojis = ['🌟', '🚀', '🛰️'];
  const burst = Array(80).fill().map(() => ({
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 0.5 + Math.random() * 1.5,
    rotation: Math.random() * 360,
    speed: 1 + Math.random() * 2
  }));


  onMount(() => {
    setTimeout(() => {
      showEmojis = false;
    }, 3000);
  });

 
  const toggleCard = (card) => {
    flippedCards[card] = !flippedCards[card];
  };
</script>

<style>

  :global(body) {
    margin: 0;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    color: #2c3e50;
    line-height: 1.6;
  }


  .emoji-burst {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
    animation: fadeOut 2.5s forwards;
  }

  .emoji {
    position: absolute;
    animation: floatDown 3s ease-out forwards;
  }

  @keyframes floatDown {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }


  .header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .name {
    color: #3a4a6d;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  .title {
    color: #6e8efb;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .bio {
    max-width: 700px;
    margin: 0 auto;
  }


  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin: 2rem auto;
    max-width: 1000px;
  }

  .card-container {
    perspective: 1000px;
  }

  .card {
    width: 300px;
    height: 220px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    position: relative;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }

  .card:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  .card.flip {
    transform: rotateY(180deg);
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 1rem;
    box-sizing: border-box;
  }

  .front {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    font-size: 1.3rem;
    text-align: center;
    text-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .back {
    background: white;
    transform: rotateY(180deg);
    overflow: hidden;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }


  .fun-facts {
    max-width: 700px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }

  .fun-fact {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }

  .fun-fact:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  a {
    color: #6e8efb;
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 500;
  }

  a:hover {
    color: #4a6cf7;
    text-decoration: underline;
  }


  @media (max-width: 768px) {
    .cards-container {
      flex-direction: column;
      align-items: center;
    }
    
    .card {
      width: 280px;
      height: 200px;
    }
  }
</style>


{#if showEmojis}
  <div class="emoji-burst">
    {#each burst as item}
      <div 
        class="emoji" 
        style="
          left: {item.x}%; 
          top: {item.y}%; 
          font-size: {item.size}rem;
          transform: rotate({item.rotation}deg);
          animation-duration: {item.speed}s;
        "
      >
        {item.emoji}
      </div>
    {/each}
  </div>
{/if}


<main>
  <section class="header">
    <h1 class="name">🌟 Menna Hassan 🌟</h1>
    <h2 class="title">Data Science & AI Student</h2>
    <p class="bio">
      I'm a college CSAI student specializing in Data Science and Artificial Intelligence. 
      My skills include data scraping, cleaning, visualization, and machine learning. 
      I'm passionate about turning raw data into meaningful insights.
    </p>
  </section>

  <section class="cards-container">
    <div
      class="card-container"
      role="button"
      tabindex="0"
      aria-pressed="{flippedCards.pyramid}"
      on:click={() => toggleCard('pyramid')}
      on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCard('pyramid'); e.preventDefault(); } }}
    >
      <div class="card {flippedCards.pyramid ? 'flip' : ''}">
        <div class="card-face front">
          My Landscape Photography<br>Click to see!
        </div>
        <div class="card-face back">
          <img src="pyramid-pic.jpg" alt="Pyramid landscape photography">
        </div>
      </div>
    </div>

    <div
      class="card-container"
      role="button"
      tabindex="0"
      aria-pressed="{flippedCards.coloring}"
      on:click={() => toggleCard('coloring')}
      on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCard('coloring'); e.preventDefault(); } }}
    >
      <div class="card {flippedCards.coloring ? 'flip' : ''}">
        <div class="card-face front">
          My Coloring Artwork<br>Click to reveal!
        </div>
        <div class="card-face back">
          <img src="coloring-pic.jpg" alt="Coloring page artwork">
        </div>
      </div>
    </div>

    <div
      class="card-container"
      role="button"
      tabindex="0"
      aria-pressed="{flippedCards.saturn}"
      on:click={() => toggleCard('saturn')}
      on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { toggleCard('saturn'); e.preventDefault(); } }}
    >
      <div class="card {flippedCards.saturn ? 'flip' : ''}">
        <div class="card-face front">
          Astronomy Passion<br>Tap to explore!
        </div>
        <div class="card-face back">
          <img src="saturn-pic.png" alt="Saturn astronomical">
        </div>
      </div>
    </div>
  </section>

  <section class="fun-facts">
    <h2>Fun Facts About Me</h2>
    <div class="fun-fact">
      <strong>1. Landscape Photography</strong> - I love capturing the beauty of nature and architecture through my camera lens.
    </div>
    <div class="fun-fact">
      <strong>2. Coloring Therapy</strong> - I find coloring pages to be a wonderful way to relax and express creativity.
    </div>
    <div class="fun-fact">
      <strong>3. Astronomy Enthusiast</strong> - I'm fascinated by space exploration and cosmic phenomena. 
      <a href="https://webbtelescope.org/contents/media/images/01H3X9BMPCX165ZK9RA49J2416" 
         target="_blank" 
         rel="noopener noreferrer">
        Here's my favorite James Webb Telescope image →
      </a>
    </div>
  </section>
</main>
