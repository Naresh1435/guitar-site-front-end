function  Topnav(){
    return (
        <nav class="bg-cyan-800 p-2">
        <div class="flex justify-end">
            <div class="box1 mr-auto justify-start ">
              <h2 class="mt-1 font-bold">Logo</h2>
            </div>
            <div class="box3 text-black">
                <img className="h-12 w-12 mr-2 rounded-full" src="https://s.gravatar.com/avatar/da5f68e4c5981bb082f96095e8b53269?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fna.png" alt="profile"/>
            </div>
        </div>
    </nav>
    );
}
export default Topnav;