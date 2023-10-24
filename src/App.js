import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
      {/* bottom navigation */}
      <div className="btm-nav">
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  </button>
  <button className="active">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  </button>
</div>

<div className='h-15 w-15'></div>
<div className="avatar-group -space-x-6 ">
  <div className="avatar">
    <div className="w-12">
      <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>




<div className="carousel rounded-box">
  <div className="carousel-item">
    <img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Burger" />
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
</div>
<span className="countdown font-mono text-6xl">
  <span style={{"--value":56}}></span>
</span>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://serpstat.com/files/img/80/1676542274.1525.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      {/* row 4 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.forbesindia.com/media/photogallery/2018/Aug/05_sanjivmehta_tcm1255-432827_20180823035517_930x584.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </div>
    
  );
}

export default App;
