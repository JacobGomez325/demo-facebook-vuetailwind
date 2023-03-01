<template>
  <div class="w-full  bg-gray-100 ">
    <navbar></navbar>
    <div class="flex justify-between pt-8 mt-7 px-4  overflow-hidden ">
      <sidebar-1></sidebar-1>
      <maine></maine>
      <div class="pt-8 pl-12" style="width:25%">
        <div class="bg-white rounded-md shadow p-4 mb-4">
          <div class="flex space-x-2 items-center">
            <span><img src="/logo/cadeau.png" alt=""></span>
            <h6 class="text-sm font-semibold capitalize">aniversaires</h6>
          </div>
          <p>C'est l'aniversaire de <span class="font-semibold">Mathias Mehinto</span> aujourd'hui. </p>
        </div>
        <p style="height:1px" class=" my-4 w-full bg-gray-300"></p>
        <h3 class="text-gray-600 text-lg font-semibold capitalize my-3">sponsorisé</h3>
        <div class="flex  space-x-4 items-center">
          <div class="w-2/5">
            <img src="/img/tradeur.png" class=" rounded-md shadow object-cover w-full" alt="">
          </div>
          <div>
            <h3 class="text-lg font-semibold">Traidez et gagnez</h3>
            <h6 class="text-xs text-gray-400 font-semibold ">fbs.com</h6>
          </div>
        </div>
        <p style="height:1px" class=" my-4 w-full bg-gray-300"></p>
        <div class="contact">
          <div class=" flex justify-between items-center my-3">
            <h3 class="text-gray-600 text-lg font-semibold capitalize ">Contacts</h3>
            <div class="flex text-gray-700 space-x-4">
              <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.3em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></svg></span>
              <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.3em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></span>
              <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.3em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="48"></circle><circle cx="416" cy="256" r="48"></circle><circle cx="96" cy="256" r="48"></circle></svg></span>
            </div>
          </div>
          <div>
            <div class="relative my-2 flex items-center ">
              <img
                class="h-10 w-10 rounded-full border border-gray-300 shadow"
                src="/storie/judicael.jpg"
                alt="Avatar of User"
              />
              <span class=" absolute bottom-1 left-8 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
              <h3 class="text-gray-600 text-md font-semibold capitalize mx-4 ">Judicaël AHYI</h3>
          </div>
          <div class="relative my-2 flex items-center ">
            <img
              class="h-10 w-10 rounded-full border border-gray-300 shadow"
              src="/storie/ola.jpg"
              alt="Avatar of User"
            />
             <span class=" absolute bottom-1 left-8 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
             <h3 class="text-gray-600 text-md font-semibold capitalize mx-4 ">Marcellin DOHOU</h3>
          </div>
          <div class="relative my-2 flex items-center ">
            <img
              class="h-10 w-10 rounded-full border border-gray-300 shadow"
              src="/storie/jerome.jpg"
              alt="Avatar of User"
            />
             <span class=" absolute bottom-1 left-8 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
             <h3 class="text-gray-600 text-md font-semibold capitalize mx-4 ">Mr Jerome</h3>
          </div>
          <div class="relative my-2 flex items-center ">
            <img
              class="h-10 w-10 rounded-full border border-gray-300 shadow"
              src="/storie/suzane.jpg"
              alt="Avatar of User"
            />
            <span class=" absolute bottom-1 left-8 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
            <h3 class="text-gray-600 text-md font-semibold capitalize mx-4 ">Mde Suzanne</h3>
          </div>
          <div class="relative my-2 flex items-center ">
            <img
              class="h-10 w-10 rounded-full border border-gray-300 shadow"
              src="/storie/madara.jpg"
              alt="Avatar of User"
            />
            <span class=" absolute bottom-1 left-8 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
             <h3 class="text-gray-600 text-md font-semibold capitalize mx-4 ">Le boss Madara</h3>
          </div>
          <div class="relative my-2 flex items-center ">
            <img
              class="h-10 w-10 rounded-full border border-gray-300 shadow"
              src="/storie/zidaine.jpg"
              alt="Avatar of User"
            />
            <span class=" absolute bottom-1 left-8 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
             <h3 class="text-gray-600 text-md font-semibold capitalize mx-4 ">Zidane le Grand</h3>
          </div>
          <div class="relative my-2 flex items-center ">
            <img
              class="h-10 w-10 rounded-full border border-gray-300 shadow "
              src="/storie/rock.jpg"
              alt="Avatar of users"
            />
            <span class=" absolute bottom-1 left-8 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
             <h3 class="text-gray-600 text-md font-semibold capitalize mx-4 ">Guy Rock</h3>
          </div>
          </div>
        </div>
      </div>
    </div>

  
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: .25rem;
  height: .25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #777;
  background-color: #aaa1
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #777;
  background-color: #aaa1
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>