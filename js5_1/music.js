class Music {
    constructor(title, singer, img, file) {
        this.title  = title;
        this.singer = singer;
        this.img    = img;
        this.file   = file;
    }
    get Name() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Tek Başına","Erkin Koray","","");
    new Music("","Erkin Koray","","");
    new Music("Aramızda Uçurumlar","Suat Suna","3.jpeg","3.mp3");
]