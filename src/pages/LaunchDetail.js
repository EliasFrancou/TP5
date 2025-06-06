import getHash from '../utils/getHash.js';
import getData from '../utils/getData.js';

const LaunchDetail = async () => {
  const id = getHash();
  const launch = await getData(id);
  const view = `
  <div class="Launch-inner">
    <img src="${launch.links.patch.large || 'https://via.placeholder.com/500'}" alt="${launch.name}" class="Launch-image" />
    
    <div class="Launch-info">
      <h2>${launch.name}</h2>
      <h3>Número de vuelo: <span>${launch.flight_number}</span></h3>
      <h3>Fecha y hora: <span>${launch.date_utc}</span></h3>
      <h3>Éxito: <span>${launch.success}</span></h3>
      <h3>Detalles: <span>${launch.details || 'Sin detalles disponibles'}</span></h3>
      <h3>Fallas: <span>${launch.failures?.map(f => f.reason).join(', ') || 'Ninguna'}</span></h3>
    </div>
  </div>
`;


  return view;
};

export default LaunchDetail;
