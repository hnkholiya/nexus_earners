import './style.css'

document.querySelector('#app').innerHTML = `
<div class="bg-slate-950 text-white min-h-screen">

  <!-- Navbar -->
  <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h2 class="text-2xl font-bold text-cyan-400">
        Nexus Earner's
      </h2>

      <div class="hidden md:flex gap-8">
        <a href="#home" class="hover:text-cyan-400">Home</a>
        <a href="#about" class="hover:text-cyan-400">About</a>
        <a href="#earning" class="hover:text-cyan-400">Earning Methods</a>
        <a href="#faq" class="hover:text-cyan-400">FAQ</a>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section id="home" class="pt-40 pb-24 px-6">
    <div class="max-w-5xl mx-auto text-center">

      <div class="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
        🚀 India's Growing Free Earning Community
      </div>

      <h1 class="text-5xl md:text-7xl font-bold mt-8">
        Earn Online With
        <span class="text-cyan-400">Nexus Earner's</span>
      </h1>

      <p class="mt-8 text-xl text-slate-400 max-w-3xl mx-auto">
        Join a community helping people earn through Crypto Airdrops,
        Affiliate Marketing, Refer & Earn Programs, Earning Apps and
        other online opportunities.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <button class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold">
          Join Community
        </button>

        <button class="border border-slate-700 px-8 py-4 rounded-xl hover:border-cyan-400">
          Learn More
        </button>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="px-6 pb-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

      <div class="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
        <h3 class="text-4xl font-bold text-cyan-400">₹300K+</h3>
        <p class="text-slate-400 mt-2">Community Earnings</p>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
        <h3 class="text-4xl font-bold text-cyan-400">1000+</h3>
        <p class="text-slate-400 mt-2">Members</p>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
        <h3 class="text-4xl font-bold text-cyan-400">500+</h3>
        <p class="text-slate-400 mt-2">Opportunities Shared</p>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
        <h3 class="text-4xl font-bold text-cyan-400">100%</h3>
        <p class="text-slate-400 mt-2">Free To Join</p>
      </div>

    </div>
  </section>

</div>
`