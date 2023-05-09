function App() {
  return (
    <>
      <div className="text-base text-red-500">hello world</div>
      <div className="text-lg">hello world</div>
      <div className="text-2xl">hello world</div>
      <div className="text-2xl p-3">hello world</div>
      <div className="text-2xl pt-3">hello world</div>

      <div className="p-5">
        <ui className="list-disc">
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ui>
      </div>

      <div className="p-5">
        <ui className="list-disc">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo dicta ex architecto iste officiis, voluptate perferendis deleniti rerum cum possimus, quas placeat doloremque ab ea explicabo recusandae corporis incidunt.</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ui>
      </div>

      <div className="p-5">
        <ui className="list-decimal">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo dicta ex architecto iste officiis, voluptate perferendis deleniti rerum cum possimus, quas placeat doloremque ab ea explicabo recusandae corporis incidunt.</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ui>
      </div>
      <div className="p-5">
        <ui className="list-decimal hover:list-disc">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo dicta ex architecto iste officiis, voluptate perferendis deleniti rerum cum possimus, quas placeat doloremque ab ea explicabo recusandae corporis incidunt.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni dolorum iusto eos reprehenderit eum deleniti dolores non quo esse pariatur? Cumque placeat nulla a facilis, facere commodi quia illo nobis!</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ui>
      </div>

      <div className="w-32 h-32 bg-red-400"></div>
      <div className="w-32 h-32 bg-red-400 rounded"></div>
      <div className="w-32 h-32 bg-red-400 rounded-2xl"></div>
      <div className="w-32 h-32 bg-red-400 rounded-full"></div>

      <div className="text-[17px]">hello world</div>
      <div className="mt-[17px]">hello world</div>
      <div className="bg-[#4267B2]">hello world</div>

      <div class="space-y-12">
        <div class="w-96 bg-white shadow rounded">w-96</div>
        <div class="w-80 bg-white shadow rounded">w-80</div>
        <div class="w-72 bg-white shadow rounded">w-72</div>
        <div class="w-64 bg-white shadow rounded">w-64</div>
        <div class="w-60 bg-white shadow rounded">w-60</div>
        <div class="w-56 bg-white shadow rounded">w-56</div>
        <div class="w-52 bg-white shadow rounded">w-52</div>
        <div class="w-48 bg-white shadow rounded">w-48</div>
        <div class="w-2/4 bg-white shadow rounded">w-48</div>
      </div>
      <br />

      <div class="grid grid-cols-10 gap-2">
        <div class="bg-sky-50 aspect-square"></div>
        <div class="bg-sky-100 aspect-square"></div>
        <div class="bg-sky-200 aspect-square"></div>
        <div class="bg-sky-300 aspect-square"></div>
        <div class="bg-sky-400 aspect-square"></div>
        <div class="bg-sky-500 aspect-square"></div>
        <div class="bg-sky-600 aspect-square"></div>
        <div class="bg-sky-700 aspect-square"></div>
        <div class="bg-sky-800 aspect-square"></div>
        <div class="bg-sky-900 aspect-square"></div>
      </div>
      <div class="grid grid-cols-10 gap-2">
        <div class="bg-blue-50 aspect-square"></div>
        <div class="bg-blue-100 aspect-square"></div>
        <div class="bg-blue-200 aspect-square"></div>
        <div class="bg-blue-300 aspect-square"></div>
        <div class="bg-blue-400 aspect-square"></div>
        <div class="bg-blue-500 aspect-square"></div>
        <div class="bg-blue-600 aspect-square"></div>
        <div class="bg-blue-700 aspect-square"></div>
        <div class="bg-blue-800 aspect-square"></div>
        <div class="bg-blue-900 aspect-square"></div>
      </div>
      <div class="grid grid-cols-10 gap-2">
        <div class="bg-indigo-50 aspect-square"></div>
        <div class="bg-indigo-100 aspect-square"></div>
        <div class="bg-indigo-200 aspect-square"></div>
        <div class="bg-indigo-300 aspect-square"></div>
        <div class="bg-indigo-400 aspect-square"></div>
        <div class="bg-indigo-500 aspect-square"></div>
        <div class="bg-indigo-600 aspect-square"></div>
        <div class="bg-indigo-700 aspect-square"></div>
        <div class="bg-indigo-800 aspect-square"></div>
        <div class="bg-indigo-900 aspect-square"></div>
      </div>
      <div class="grid grid-cols-10 gap-2">
        <div class="bg-violet-50 aspect-square"></div>
        <div class="bg-violet-100 aspect-square"></div>
        <div class="bg-violet-200 aspect-square"></div>
        <div class="bg-violet-300 aspect-square"></div>
        <div class="bg-violet-400 aspect-square"></div>
        <div class="bg-violet-500 aspect-square"></div>
        <div class="bg-violet-600 aspect-square"></div>
        <div class="bg-violet-700 aspect-square"></div>
        <div class="bg-violet-800 aspect-square"></div>
        <div class="bg-violet-900 aspect-square"></div>
      </div>
      <br />

      <div class="space-y-5">
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-sans</h3>
          <p class="font-sans">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-serif</h3>
          <p class="font-serif">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-mono</h3>
          <p class="font-mono">The quick brown fox jumps over the lazy dog.</p>
        </div>
        <div class="p-3 bg-white shadow rounded-lg">
          <h3 class="text-xs border-b">font-mono</h3>
          <p class="font-mono">The quick brown fox jumps over the lazy dog.</p>
        </div>
      </div>

      <br />
      <div class="grid grid-cols-2 gap-6">
        <div class="shadow-sm bg-white rounded-lg">shadow-sm</div>
        <div class="shadow bg-white rounded-lg">shadow</div>
        <div class="shadow-md bg-white rounded-lg">shadow-md</div>
        <div class="shadow-lg bg-white rounded-lg">shadow-lg</div>
        <div class="shadow-xl bg-white rounded-lg">shadow-xl</div>
        <div class="shadow-2xl bg-white rounded-lg">shadow-2xl</div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
