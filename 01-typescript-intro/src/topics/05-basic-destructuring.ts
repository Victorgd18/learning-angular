interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015
  }
}

const { 
  song, 
  songDuration: duration, 
  details: {author} 
} = audioPlayer

console.log('Song: ', song);
console.log('Duration: ', duration);
console.log('Author: ', author);

console.log(song)