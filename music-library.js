let protolibrary = {
  addPlaylist(newPlayList) {
      this.playlists.push(newPlayList);
    }
};

function makeLibrary(name, creator) {
  let library = Object.create(protolibrary);
  library.name = name;
  library.creator = creator;
  library.playlists = [];
  return library;
};

function makePlayList(playListName) {
  let playlist = Object.create(protoPlaylist);
  playlist.name = playListName;
  playlist.tracks = [];
  playlist.duration = 0;
  playlist.rating = 0;
  return playlist;
};

let protoPlaylist = {
  addTrack(newTrack){
      this.tracks.push(newTrack);
      this.duration += newTrack.duration;

      let totalRating = this.tracks.reduce((a,b) => {
        return a.rating + b.rating});
      this.rating = totalRating/this.tracks.length;
    }
};

function track(title, rating, duration){
  this.title = title;
  this.rating = rating;
  this.duration = duration;
};

let newTrack = new track("The Awesomes", 3, 125);
let newerTrack = new track("Not Awesome", 1, 120);
let newPlayList = new makePlayList("Awesome PlayList");
newPlayList.addTrack(newTrack);
newPlayList.addTrack(newerTrack);
let newLibrary = new makeLibrary("AwesomeSauce", "BananaRecords");
newLibrary.addPlaylist(newPlayList.name);
// console.log(newLibrary);
console.log(newPlayList);
// console.log("track: " + newTrack);
