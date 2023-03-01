<template>
  <div class="w-full my-4 bg-white pb-8 p-4 shadow rounded-lg ">
    <div  class="mb-4 relative flex  space-x-2  font-medium text-gray-700  hover:text-secondary transition ease-in-out duration-500">
      <span class=" hover:text-secondary inline-block"> <img class="h-10 w-10 rounded-lg border border-gray-300 shadow" src="/logo/webdev.jpg" alt="Avatar of User"/>  </span>
      <p class="inline-bloc text-gray-700 flex "> 
        <span class="font-bold text-black">Elodie Muller</span> 
        a posé une question
        <span class="text-red-500 mt-1 px-2">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14v2h2v-2h-2zM8.567 8.813l1.962.393A1.5 1.5 0 1 1 12 11h-1v2h1a3.5 3.5 0 1 0-3.433-4.187z"></path></g></svg>
        </span>
       dans 
        <span class="font-bold text-black px-2">Developpeurs web.</span> 
      </p>
      <p class="flex items-center space-x-2 absolute bottom-0  left-10 ">
        <span class="text-gray-600 text-xs">25 min .</span>
        <span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M253.47 17.406C123.76 17.406 18.437 122.76 18.437 252.47c0 129.707 105.324 235.06 235.03 235.06 129.707 0 235.063-105.353 235.063-235.06 0-129.71-105.355-235.064-235.06-235.064zM367.874 68.75c61.246 38.19 101.97 106.14 101.97 183.72 0 17.143-1.993 33.823-5.75 49.81l-34.25-18.06 22 54.874c-9.454 21.647-22.362 41.432-38 58.687l-43.158-30.936-64.625 47.72-61.656 6.967-13.906-41.78-49.72 26.844-68.093-18.938 9.157 36.594c-28.41-21.793-51.23-50.466-66-83.563L81.25 304.47l32.25 17.124 59.22-9.875 2.843-40.908-37.344-1.718 4.905-17.844 30.78-25.313-25.093-15.625 67.22-38.593-45.345-29.657-66.625 40.187-49.437-15.28c13.812-32.14 35.21-60.22 61.906-82.064l-3.75 44.375 43.376-34.124 72 22.22-22.5-27.407L233 75.562l26.813 28.468 71 9.845-3.5-34.47 41.468 12.657-.905-23.312zm1.156 120.03L278 199.47l28.906 43.218 3.156 64.468L339.25 321l11.438-28.375 62.656 48.656L395.78 294l6.408-48.344-43.75-22.72 10.593-34.155zM221 192.438l-31.594 21.188 36.47 14.78 16.686-14.78L221 192.437zm22.188 144.688l18.687 52.594 19.78-42.564-38.467-10.03z"></path></svg>
        </span>
      </p>
      <span class=" absolute top-0 right-0 ">
        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
      </span>
       
    </div>
    <!--content-->
    <div>
      <p class=" leading-5">
      Salut à tous! 
      Alors voila, je souhaite importer une vidéo sur un site . Voici mon code.  
      Néanmoins pour que cela fonctionne je dois config webpack. J'ai donc essayé d'ajouter ce qu'il y'a sur la deuxième photo dans mon fichier webpack.common mais l'erreur  "You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See
      <a href="#" class="text-indigo-700">https://webpack.js.org/concepts#loaders</a>" persite 😕 … <a href="#">Afficher la suite</a>
      </p>
      <div class="flex my-4 shadow" style="height:250px">
        <p><img src="/storie/post1.jpg" class="h-full" alt=""></p>
        <p><img src="/storie/post2.jpg" class="h-full" alt=""></p>
      </div>
      <div>
        <p class="flex space-x-2 items-center">
          <span class="bg-primary rounded-full p-1 text-white">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"></path></svg>
          </span>
          <span class=" font-semibold text-gray-700">1</span>
        </p>
        <p  style="height:1px" class="w-full my-4 bg-gray-400"></p>
      </div>
      <div class="flex justify-between mx-8 space-x-4">
        <div class="flex space-x-2 items-center ">
         <span class="text-gray-500"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg></span>
          <span class="text-gray-500 font-semibold ">J'aime</span>
        </div>
        <div class="flex space-x-2 items-center">
          <span class="text-gray-500"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1 1 12 13h-1v-2h1a1.5 1.5 0 1 0-1.471-1.794l-1.962-.393z"></path></g></svg></span>
          <span class="text-gray-500 font-semibold ">Répondre</span>
        </div>
        <div class="flex space-x-2 items-center">
          <span class="text-gray-500"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.6em" width="1.6em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"></path></g></svg></span>
          <span class="text-gray-500 font-semibold ">Partager</span>
        </div>
      
      </div>
      <p  style="height:1px" class="w-full mt-4 mb-2 bg-gray-400"></p>
      <div class="flex space-x-4 items-center mb-4 relative ">
        <p class="relative">
          <img
            class="h-10 w-10 rounded-full border border-gray-300 shadow"
            src="/img/profil.jpg"
            alt="Avatar of User"
          />
          <span class=" absolute bottom-1 right-0 inline-block w-2 h-2 rounded-full bg-green-500  "></span>
        </p>
        <input type="text" class="bg-gray-200 rounded-3xl mt-1 w-full px-8 py-2 outline-none focus:outline-none  placeholder-gray-700 " placeholder="Ecrivez une réponse ...">
        <span class=" absolute  left-10 text-gray-600 text-xs" style="bottom:-18px">Touchez Entrée pour publier votre commentaire.</span>
        <div class="flex  space-x-2   absolute right-4 text-gray-500">
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path></svg>
          </span>
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-3a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0H7zm1-6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></g></svg>
          </span>
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M12,8c-2.168,0-4,1.832-4,4c0,2.168,1.832,4,4,4s4-1.832,4-4C16,9.832,14.168,8,12,8z M12,14c-1.065,0-2-0.935-2-2 s0.935-2,2-2s2,0.935,2,2S13.065,14,12,14z"></path><path d="M20,5h-2.586l-2.707-2.707C14.52,2.105,14.266,2,14,2h-4C9.734,2,9.48,2.105,9.293,2.293L6.586,5H4C2.897,5,2,5.897,2,7v11 c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V7C22,5.897,21.103,5,20,5z M4,18V7h3c0.266,0,0.52-0.105,0.707-0.293L10.414,4h3.172 l2.707,2.707C16.48,6.895,16.734,7,17,7h3l0.002,11H4z"></path></svg>
          </span>
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683725598" viewBox="0 0 1024 1024" version="1.1" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M551.5 490.5H521c-4.6 0-8.4 3.7-8.4 8.4V720c0 4.6 3.7 8.4 8.4 8.4h30.5c4.6 0 8.4-3.7 8.4-8.4V498.9c-0.1-4.6-3.8-8.4-8.4-8.4zM477.3 600h-88.1c-4.6 0-8.4 3.7-8.4 8.4v23.8c0 4.6 3.7 8.4 8.4 8.4h47.6v0.7c-0.6 29.9-23 49.8-56.5 49.8-39.2 0-63.6-30.7-63.6-81.4 0-50.1 23.9-80.6 62.3-80.6 28.1 0 47.5 13.5 55.4 38.3l0.9 2.8h49.2l-0.7-4.6C475.9 515.9 434.7 484 379 484c-68.8 0-113 49.4-113 125.9 0 77.5 43.7 126.1 113.6 126.1 64.4 0 106-40.3 106-102.9v-24.8c0-4.6-3.7-8.3-8.3-8.3z"></path><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"></path><path d="M608.2 727.8h32.3c4.6 0 8.4-3.7 8.4-8.4v-84.8h87.8c4.6 0 8.4-3.7 8.4-8.4v-25.5c0-4.6-3.7-8.4-8.4-8.4h-87.8v-58.9h96.8c4.6 0 8.4-3.7 8.4-8.4v-26.8c0-4.6-3.7-8.4-8.4-8.4H608.2c-4.6 0-8.4 3.7-8.4 8.4v221.1c0 4.8 3.8 8.5 8.4 8.5z"></path></svg>
          </span>
          <span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"></path><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path></svg>
          </span>
        </div>
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