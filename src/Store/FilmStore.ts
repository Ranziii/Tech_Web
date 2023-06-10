import {types} from 'mobx-state-tree';
import {films,IFilm} from "../data";
import {action} from "mobx";

const IFilms = types.model({
    name:types.string,
    year:types.number,
    rate: types.number,
    img: types.string
})

const FilmStore = types
    .model("Film", {
        data: types.array(IFilms),
    })

    .actions(self => ({
        setItems: action(function () {
            if (localStorage.getItem('film')) {
                // @ts-ignore
                self.data = JSON.parse(localStorage.getItem('film'))
                return
            }
            localStorage.setItem('film', JSON.stringify(films))
            // @ts-ignore
            self.data = JSON.parse(localStorage.getItem('film'))

        }),

        createNewItem: action(function (item: IFilm) {
            self.data.push(item);
            localStorage.setItem("film", JSON.stringify(self.data));
        }),

        deleteItem: action(function (id: number) {
            // @ts-ignore
            self.data = self.data.filter((el) => el.id !== id);
            localStorage.setItem("film", JSON.stringify(self.data));
        }),
    }));

export default FilmStore.create();