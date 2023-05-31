import { action, makeAutoObservable, observable } from "mobx";

class WordsStore {
  @observable words = [];
  @observable error = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action fetchData = () => {
    this.isLoading = true;

    return fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ошибка");
        }
      })
      .then((response) => {
        this.words = response;
        this.isLoading = false;
      })
      .catch((error) => {
        this.error = error;
        this.isLoading = false;
      });
  };
}

export default WordsStore;
