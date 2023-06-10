export interface IFilm{
    name:string,
    year:number,
    rate: number,
    img:string
}

export const films:IFilm[]=[
    {
        name : "Атака тианов",
        year : 2013,
        rate : 9.1,
        img : "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/3694473-1457716.jpg"
    },
    {
        name : "Hunter x Hunter",
        year : 2011,
        rate : 9,
        img : "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/1637164-880441.jpg"
    },
    {
        name : "Ковбой Бибоп",
        year : 1998,
        rate : 8.9,
        img : "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/Cowboy-Bebop-2.jpg"
    },
    {
        name : "Берсерк",
        year : 1997,
        rate : 99999,
        img : "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/3661732-1457719.jpg"
    },
    {
        name : "Блич",
        year : 2004,
        rate : 9,
        img : "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a5/Bleach_fan.jpg/257px-Bleach_fan.jpg"
    },
    {
        name : "Наруто: Ураганные хроники",
        year : 2007,
        rate : 9.4,
        img : "https://animego.org/media/cache/thumbs_250x350/upload/anime/images/5a3ff73e8bd5b.jpg"
    }
]