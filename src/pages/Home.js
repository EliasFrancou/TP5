import getData from '../utils/getData.js';

const Home = async () => {
  const launches = await getData();

  const view = `
    <div class="Launches">
      ${
        launches && launches.length > 0
          ? launches.map(launch => `
            <article class="Launch-item">
              <a href="#/${launch.id}/">
                <img src="${launch.links.patch.small || 'https://via.placeholder.com/300x200'}" 
                    alt="${launch.name}"
                    onerror="this.src='https://via.placeholder.com/300x200'">
                <h2>${launch.name}</h2>
              </a>
            </article>
          `).join('')
          : '<p class="no-data">No hay lanzamientos disponibles.</p>'
      }
    </div>
  `;
  
  return view;
}

export default Home;
