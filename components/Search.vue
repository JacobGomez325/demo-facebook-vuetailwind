<template>
  <div class="w-full my-4 bg-white px-6 py-4 shadow rounded-lg ">
    <div class="flex space-x-4 items-center">
      <p class="">
        <img
          class="h-10 w-12 rounded-full border border-gray-300 shadow"
          src="/img/profil.jpg"
          alt="Avatar of User"
        />
      </p>
      <input type="text" class="bg-gray-200 rounded-3xl  w-full px-8 py-3 outline-none focus:outline-none  placeholder-gray-700 " placeholder="Quoi de neuf ,Jam ?">
    </div>
    <p style="height:1px" class=" my-4 w-full bg-gray-300"></p>
    <div class="flex justify-between mx-8 space-x-4">
      <div class="flex space-x-2 items-center">
        <span class="text-red-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path></svg></span>
        <span class="text-gray-700 font-semibold ">Videos en direct</span>
      </div>
      <div class="flex space-x-2 items-center">
        <span class="text-green-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M20,2H8C6.897,2,6,2.897,6,4v12c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M8,16V4h12 l0.002,12H8z"></path><path d="M4,8H2v12c0,1.103,0.897,2,2,2h12v-2H4V8z"></path><path d="M12 12L11 11 9 14 19 14 15 8z"></path></svg></span>
        <span class="text-gray-700 font-semibold ">Videos en direct</span>
      </div>
      <div class="flex space-x-2 items-center">
        <span class="text-yellow-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="9.5" r="1.5"></circle><circle cx="15.493" cy="9.493" r="1.493"></circle><path d="M12,18c5,0,6-5,6-5H6C6,13,7,18,12,18z"></path></svg></span>
        <span class="text-gray-700 font-semibold ">Humeur/Activité</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>