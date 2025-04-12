export default function Desk() {


    return (
        <div className="w-full min-h-screen border rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">January Calendar 2025</h1>
          
          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-2 mb-2 text-center font-medium text-gray-700">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
    
          {/* Calendar dates */}
          <div className="grid grid-cols-7 gap-2 text-sm">
            <div></div>  {/* Empty cell for Monday start */}
            <div></div>  {/* Empty cell for Monday start */}
            <div></div>  {/* Empty cell for Monday start */}
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">1</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">2</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">3</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">4</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">5</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">6</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">7</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">8</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">9</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">10</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">11</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">12</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">13</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">14</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">15</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">16</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">17</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">18</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">19</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">20</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">21</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">22</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">23</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">24</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">25</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">26</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">27</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">28</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">29</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">30</div>
            <div className="h-32 flex place-items-start justify-start border rounded-lg bg-gray-100 p-2">31</div>
          </div>
        </div>
      );
}